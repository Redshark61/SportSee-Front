# SportSee - Frontend

## .env file

You must set two environment variables in a `.env` file at the root of the project:

- `VITE_API_URL` : the url of the API
- `VITE_DEBUG` : `0` or `1` to enable or disable debug mode

## Starting
Since the project needs a user id to work, you must go to the url with the id at the end. For example `http://localhost:5173/12` to display the dashboard for the user with the id `12`.


## Using new endpoint

In order to use a new endpoint, you must create a new file in the `src/mocks` folder. This file contains a constant mocking the data returned by the API.
Then you must import this file in the `src/mocks/index.ts` file.

Once done, create a formatter class in the `src/utils` folder. You can go check the other classes in order to know how to create them.
Finally, you must import this class in the `src/utils/index.ts` file.

Finally, use those classe and mock in the `hooks/data.ts` file. In the `ParamsType` interface, you must add a new value in the `type` enum.
You then add a new `case` in the `useFetchData` hook, matching the value you added earlier. The `case` value should match the following pattern:

```ts
mock = ()=>fetchMock(myNewMockedData);
Formatter = MyNewFormatterClass;
break;
```
