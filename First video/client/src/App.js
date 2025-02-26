import { gql, useQuery } from '@apollo/client';

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading} = useQuery(query);

  if(loading) return <h1>Loading....</h1>

  return (
    <div className="App">
      {/* {JSON.stringify(data)} */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {data.getTodos.map(todo =>(
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo?.user?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
