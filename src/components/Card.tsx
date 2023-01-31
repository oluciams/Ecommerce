type PropsProduct = {
  id: number;
  title: string;
  image: string;
};

export const Card = ({ id, title, image }: PropsProduct): JSX.Element => {

  return (
    <section key={id} className="card">
      <img src={image} alt={title} />
      <h5>{title.substring(0,20)}</h5>
      <aside>
        <button>Go To Detail</button>
      </aside>
    </section>
  )
}