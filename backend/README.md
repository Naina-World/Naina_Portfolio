# Naina Portfolio Backend

Production-oriented REST API for a developer portfolio using **Node.js, Express and MongoDB/Mongoose**.

## Architecture

```text
src/
├── app.js
├── server.js
├── config/
│   ├── cors.js
│   ├── db.js
│   └── env.js
├── controllers/
│   ├── admin.controller.js
│   └── public.controller.js
├── middlewares/
│   ├── auth.js
│   ├── errorHandler.js
│   ├── notFound.js
│   └── validate.js
├── models/
│   ├── Admin.js
│   ├── Contact.js
│   ├── Profile.js
│   ├── Project.js
│   ├── Skill.js
│   └── Testimonial.js
├── routes/
│   ├── admin.routes.js
│   ├── health.routes.js
│   └── public.routes.js
├── services/
│   └── mail.service.js
├── utils/
│   ├── apiError.js
│   ├── asyncHandler.js
│   └── pagination.js
└── validators/
    ├── auth.validator.js
```

## Setup

Requirements: Node.js 20+ and MongoDB.

```bash
npm install
copy .env.example .env
npm run dev
```

On macOS/Linux:

```bash
cp .env.example .env
npm install
npm run dev
```

Set at least:

```env
MONGO_URI=mongodb://127.0.0.1:27017/naina_portfolio
CLIENT_URL=http://localhost:5173
JWT_SECRET=use-a-random-secret-with-at-least-32-characters
```

For email notifications configure the SMTP variables.

## First admin in development

```http
POST /api/v1/admin/auth/bootstrap
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "a-strong-password-123"
}
```

Then login:

```http
POST /api/v1/admin/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "a-strong-password-123"
}
```

Use the returned JWT on admin requests:

```http
Authorization: Bearer YOUR_TOKEN
```

## Frontend

React/Vite:

```js
const API = import.meta.env.VITE_API_URL;

const response = await fetch(`${API}/api/v1/portfolio`);
const result = await response.json();
```

Contact form:

```js

## Production notes

- Use MongoDB Atlas or another managed MongoDB service.
- Store secrets only in deployment environment variables.
- Set `CLIENT_URL` to the exact production frontend origin(s), comma-separated if needed.
- Use HTTPS.
- Use an SMTP provider for contact notifications.
- Use Cloudinary/S3 for project images instead of MongoDB binary storage.
- Add CI, integration tests and structured logging before high traffic.
- If auth is moved to cookies, add an appropriate CSRF strategy.
