
/*jshint esversion: 6 */
function getData() {
  return fetch('/api/getty/records', {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);
}

function search(query) {
  return fetch(`/api/getty/search?q=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = { getData, search };
export default Client;
