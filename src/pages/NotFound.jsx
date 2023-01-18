import { useRouteError } from 'react-router-dom';

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>{error.statusText}</h1>
    </div>
  );
}
export default NotFound;
