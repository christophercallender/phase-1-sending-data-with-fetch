function submitData(userName, userEmail) {
   let data = { name: userName, email: userEmail };
   return fetch(
      'http://localhost:3000/users',
      /* configurationObject */ {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify(data),
      }
   )
      .then((response) => response.json())
      .then((data) => (document.body.innerHTML = data.id))
      .catch((error) => (document.body.innerHTML = error.message));
}

//OR

function configurationObject(data) {
   return {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
      },
      body: JSON.stringify(data),
   };
}
function submitData(userName, userEmail) {
   return fetch(
      'http://localhost:3000/users',
      configurationObject({ name: userName, email: userEmail })
   )
      .then((response) => response.json())
      .then((data) => (document.body.innerHTML = data.id))
      .catch((error) => (document.body.innerHTML = error.message));
}
