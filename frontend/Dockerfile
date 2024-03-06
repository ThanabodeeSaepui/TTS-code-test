# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /app

# COPY bun.lockb . 
COPY package.json . 

# RUN bun install --frozen-lockfile
RUN bun install

COPY . .

ENV PATH="${PATH}:/app/node_modules"

EXPOSE 8000

CMD ["bun", "run", "dev"]