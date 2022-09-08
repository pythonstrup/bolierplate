async function requestTest() {
  const res = await fetch('/api/test', {
    method: 'GET',
    headers: {
      'Content-Type': 'apllication/json',
    },
  });

  return res.text();
}

export {requestTest};
