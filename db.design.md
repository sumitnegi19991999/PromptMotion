📄 PromptMotion Database Design Document
Version: v1.0
Date: 2025-06-15
ORM: Prisma
Database: Supabase (PostgreSQL)

🔧 Design Summary
The schema is structured around core user activities:

Submitting prompts

Generating and storing Manim code

Rendering and downloading videos

Reviewing scene history

Sharing content

Key design choices:

Normalized structure for efficiency and relational clarity.

Audit fields (createdAt, updatedAt) for tracking and analytics.

Expandable design to easily plug in future features (voiceover, timelines, likes/comments).

Render job logs are stored separately from video metadata for better isolation and scaling.

🧱 Entity Relationship Diagram (ERD) Overview
css
Copy
Edit
User ─┬──< Scene >──┬──< RenderLog
│ └──< Video
└──< Feedback
📚 Prisma Schema Models
ts
Copy
Edit
// schema.prisma

generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

// ─────────────────────────────
// Users
model User {
id String @id @default(uuid())
email String @unique
name String?
avatarUrl String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

scenes Scene[]
feedback Feedback[]
}

// ─────────────────────────────
// Prompts & Manim Scenes
model Scene {
id String @id @default(uuid())
prompt String
manimCode String
renderStatus RenderStatus @default(PENDING)
renderDuration Int? // In seconds
hasVoiceover Boolean @default(false)
errorMessage String?
isPublic Boolean @default(false)

userId String
user User @relation(fields: [userId], references: [id])
video Video?
renderLogs RenderLog[]

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

enum RenderStatus {
PENDING
RENDERING
SUCCESS
FAILED
}

// ─────────────────────────────
// Final Video Asset
model Video {
id String @id @default(uuid())
sceneId String @unique
url String
sizeInMB Float?
duration Int? // In seconds
resolution String? // e.g. 720p, 1080p

scene Scene @relation(fields: [sceneId], references: [id])
createdAt DateTime @default(now())
}

// ─────────────────────────────
// Render logs (stderr/stdout, error trace)
model RenderLog {
id String @id @default(uuid())
sceneId String
log String

scene Scene @relation(fields: [sceneId], references: [id])
createdAt DateTime @default(now())
}

// ─────────────────────────────
// User Feedback for beta phase
model Feedback {
id String @id @default(uuid())
userId String
sceneId String?
message String
resolved Boolean @default(false)

user User @relation(fields: [userId], references: [id])
scene Scene? @relation(fields: [sceneId], references: [id])
createdAt DateTime @default(now())
}
🧩 Future-Proofing & Extensions
Feature Additions Needed
Voiceover voiceUrl field in Video, or separate Voiceover table
Multi-part timelines AnimationGroup table to stitch Scene[] into a sequence
User profiles Extend User with bio, public page toggle, etc.
Commenting/Liking Tables: Comment, Like with foreign keys to Scene
Payments Add Subscription, BillingEvent tables

🔐 Supabase Policies (at a Glance)
To ensure security and user isolation:

Table Policy Summary
Scene User can only read/write their own scenes
Video Only accessible if scene belongs to logged-in user or isPublic = true
RenderLog Only read by owners; not exposed in public sharing
Feedback Write by any logged-in user, readable by admin team

📈 Analytics Possibilities
Easily support analytics dashboards from this schema:

Avg. render time → Scene.renderDuration

Prompt usage trends → group by prompt keywords

Failure rate → Scene.renderStatus = FAILED

Engagement → count Scene per User
