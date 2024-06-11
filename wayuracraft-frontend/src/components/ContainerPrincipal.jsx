import React from 'react';
import "../styles/ContainerPrincipal.css";
import Anuncios from './Anuncios';
import Productos from '../pages/Productos';

const ContainerPrincipal = () => {
  return (
    <div className="container-principal">
      <h1>Welcome to WayuuCraft</h1>
      <Anuncios />
      <p>Explore our collection of Wayuu artisan products.</p>
      <Productos />
    </div>
  );
};

export default ContainerPrincipal;

// const ContainerPrincipal = ({ isLoggedIn }) => {
//   return (
//     <div className="container-principal">
//       {!isLoggedIn ? (
//         <Login />
//       ) : (
//         <>

//           <h1>Welcome to WayuuCraft</h1>
//           <Anuncios />
//           <p>Explore our collection of Wayuu artisan products.</p>

//           <div className="products-preview">
//             {/* Aquí puedes agregar una vista previa de productos o cualquier otro contenido relevante */}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ContainerPrincipal;


