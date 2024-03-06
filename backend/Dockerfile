# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /app

# COPY bun.lockb . 
COPY package.json . 

# RUN bun install --frozen-lockfile
RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "run", "dev"]