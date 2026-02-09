### React useEffect Guidelines

**Before using 'useEffect', read:** (https://react.dev/learn/you-might-not-need-an-effect)

Common cases where 'useEffect' is NOT needed:

- Transforming data for rendering (use variable or useMemo instead)
- Handling user events (use event handlers instead)
- Resetting state when props change (use key prop or calculate during render)
- Updatting state based on props/state changes (calculate during render)

Only use 'useEffect' for:

- Synchronizing with external systems (APIs, DOM, third-party libraries)
- Cleanup that must happen when component unmount

### Type usage with Drizzle

Always refers to drizzle orm schema generation for type.

### next js doc

Use Client Components when you need:

- State and event handlers. E.g. onClick, onChange.
- Lifecycle logic. E.g. useEffect.
- Browser-only APIs. E.g. localStorage, window, Navigator.geolocation, etc.
- Custom hooks.
- Use Server Components when you need:

- Fetch data from databases or APIs close to the source.
- Use API keys, tokens, and other secrets without exposing them to the client.
- Reduce the amount of JavaScript sent to the browser.
- Improve the First Contentful Paint (FCP), and stream content progressively to the client.
