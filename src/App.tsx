import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreator";
import { userApi } from "./store/service/userService";
import { IUser } from "./store/models/IUser";

function App() {
  const dispatch = useAppDispatch();
  const { error, isLoading, users } = useAppSelector((state) => state.users);
  const { data: posts } = userApi.useFetchAllUsersQuery(20);
  const [createPost]=userApi.useCreatePostMutation()
  const handleAddPost=async()=>{
    const title=prompt()
    await createPost({ title , completed:true,userId:3} as IUser)
  }
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  
  return (
    <div>
      {isLoading ? <h1>Loading</h1> : null}
      {error ? <h1>{error}</h1> : null}
      {/* <div className="post__container">
        {
          users?.map((item)=>
            <div className="post">
              <div className="div">{item.id}</div>
              <div className="div">{item.title}</div>
              <div className="div">{item.completed}</div>
            </div>)
        }
       
      </div> */}
      <button onClick={handleAddPost}>Add</button>
      <div className="post__container">
        {posts?.map((item) => (
          <div className="post">
            <div className="div">{item.id}</div>
            <div className="div">{item.title}</div>
            <div className="div">{item.userId}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
