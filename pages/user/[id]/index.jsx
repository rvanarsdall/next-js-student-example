const UserIndex = (props) => {
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
};

export default UserIndex;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const response = await fetch("http://localhost:3000/api/users/" + id);
  const data = await response.json();
  return {
    props: { users: data }, // will be passed to the page component as props
  };
}
