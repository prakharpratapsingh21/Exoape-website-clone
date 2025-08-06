import Child2 from "./Child2";

function Parent({user}) {
  return (
    <div>

      <h1>Parent Component</h1>
      <Child2 user={user}/>
    </div>
  );
}
export default Parent;