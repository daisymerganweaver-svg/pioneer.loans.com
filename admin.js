const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_KEY = "YOUR_SUPABASE_KEY";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadData() {

  let { data, error } = await client
    .from("applications")
    .select("*");

  let table = document.getElementById("data");

  data.forEach(app => {
    let row = `
      <tr>
        <td>${app.full_name}</td>
        <td>${app.phone}</td>
        <td>${app.email}</td>
        <td>${app.amount}</td>
        <td>${app.purpose}</td>
        <td>${app.status}</td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

loadData();
