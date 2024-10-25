import TodoApp from "../components/TodoApp/TodoApp";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import ProfilePage from "../components/ProfilePage/ProfilePage";

export default function Main() {
  return (
    <div>
      {/* first app */}
      <h1>App 1</h1>
      <TodoApp />
      {/* second app */}
      <h1>App 2</h1>
      <RegistrationForm />
      {/* third app */}
      <h1>App 3</h1>
      <ProfilePage />
    </div>
  );
}
