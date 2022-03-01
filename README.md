# Call the Graphql-Apollo Query from the Apollo-Client in the frontend

Just the difference is this basically its url and the apikey are differences : as its calling from the aws.

Here I have used Apollo Client to fetch the graphql queries of appsync from aws console ,
moreover both useQuery and useMutations hooks are used to fetch the data.

and we are sending data by the mutation addTodo to update the Query ,
and refetching the Query again to show the data.
