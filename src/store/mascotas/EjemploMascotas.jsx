import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase/firebase'

function EjemploMacotas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "mascotas"));
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setData(docs);
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
      });
    };

    getData();
  }, []);

  return (
    <div>
  <h1>ejemplo base de datos</h1>
  {data.length > 0 ? ( data.map((item, index) => (
      <div key={index}>
        <p>{item.nombre}</p>
      </div>
    ))
  ) : (
    <p>Cargando datos...</p>
  )}
</div>
  );
}

export default EjemploMacotas;