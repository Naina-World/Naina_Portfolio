# Naina Portfolio API

Base path: `/api/v1`

## Public endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Health/readiness check |
| GET | `/portfolio` | Profile + projects + skills + testimonials |
| GET | `/projects` | Published projects with pagination/filtering |
| GET | `/projects/:slug` | One published project |
| POST | `/contact` | Save contact enquiry and send notification email |

### Projects query parameters

```text
?page=1&limit=12
?category=full-stack
?featured=true
```

## Admin endpoints

### Authentication

```text
POST /admin/auth/bootstrap   development only
POST /admin/auth/login
```

After login:

```http
Authorization: Bearer YOUR_JWT
```

### Content management

```text
PUT    /admin/profile

POST   /admin/projects
PATCH  /admin/projects/:id
DELETE /admin/projects/:id

POST   /admin/skills
DELETE /admin/skills/:id

POST   /admin/testimonials
DELETE /admin/testimonials/:id

GET    /admin/contacts?page=1&limit=20
PATCH  /admin/contacts/:id/status
```

## Example project payload

```json
{
  "title": "JobTrack",
  "slug": "jobtrack",
  "description": "A full-stack job portal for candidates and recruiters.",
  "category": "full-stack",
  "imageUrl": "https://example.com/jobtrack.png",
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/Naina-World/Job_Portal",
  "technologies": ["React", "Node.js", "Express", "MongoDB"],
  "featured": true,
  "year": 2026,
  "sortOrder": 1,
  "published": true
}
```

## Example contact payload

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Website project",
  "message": "I would like to discuss a full-stack website project.",
  "service": "Full-stack development",
  "budget": "₹50,000 - ₹1,00,000"
}
```
