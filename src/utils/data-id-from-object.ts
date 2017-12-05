// The unique ID for each object using the object type and ID
const dataIdFromObject = (o: { __typename: string, id: string }) => `${o.__typename}:${o.id}`;

export { dataIdFromObject };
