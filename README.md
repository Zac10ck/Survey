# Medas Survey

Enterprise-grade survey platform for collecting feedback and insights.

## Features

- **Link Surveys**: Create shareable survey links
- **In-App Surveys**: Embed surveys directly in your application
- **Multi-Language Support**: Surveys in 14+ languages
- **Advanced Analytics**: Real-time response tracking and analysis
- **Team Collaboration**: Role-based access control
- **Integrations**: Connect with Slack, Google Sheets, Notion, and more
- **White-Label**: Full branding customization
- **Self-Hosted**: Complete control over your data

## Quick Start

### Docker Deployment

```bash
# Clone the repository
git clone https://github.com/Zac10ck/Survey.git
cd Survey/docker

# Copy and configure environment
cp docker-compose.yml docker-compose.local.yml

# Edit docker-compose.local.yml and set:
# - WEBAPP_URL
# - NEXTAUTH_URL
# - NEXTAUTH_SECRET
# - ENCRYPTION_KEY
# - CRON_SECRET

# Start the application
docker compose -f docker-compose.local.yml up -d
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `WEBAPP_URL` | Public URL of your instance (e.g., `https://survey.medascloud.com`) |
| `NEXTAUTH_URL` | Same as WEBAPP_URL |
| `NEXTAUTH_SECRET` | Secret for authentication (generate with `openssl rand -hex 32`) |
| `ENCRYPTION_KEY` | Encryption key for sensitive data |
| `CRON_SECRET` | API secret for scheduled jobs |
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |

## Development

```bash
# Install dependencies
pnpm install

# Start development database
pnpm db:up

# Run development server
pnpm dev
```

## License

This project is based on the Formbricks open-source project.
See [LICENSE](LICENSE) for details.

## Support

For issues and feature requests, please use the [GitHub Issues](https://github.com/Zac10ck/Survey/issues).
