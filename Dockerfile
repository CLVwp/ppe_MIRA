# Build + servir l'export statique Next.js (output: export)
FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm i --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM base AS runner
ENV NODE_ENV=production
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm add -g serve
COPY --from=builder /app/out ./out
EXPOSE 3000
CMD ["serve", "out", "-l", "3000"]
