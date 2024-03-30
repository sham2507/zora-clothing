

export default function Shop({children}) {
  return (
    <section id="shop">
      <h2>Choose your Clothing</h2>
      <ul id="products">
        {children}        
      </ul>
    </section>
  );
}
