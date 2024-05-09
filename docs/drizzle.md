# drizzle ORM

```bash
npx drizzle-kit push:pg # push directly to db, without generating migrations
```

## "Buffer error" recommended fix

- Get a dedicated server that will expose the proper API routes to handle API calls: `GET,POST,UPDATE,DELETE`
- Use "serverless storage" options
