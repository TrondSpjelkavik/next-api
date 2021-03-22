
export default function Home() {
  return (
    <div >
      <h1> NEXT API </h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/`);

  const names= await res.json();

  return {
    props: {
      names,
      fallback: false,
    },
  };
};
