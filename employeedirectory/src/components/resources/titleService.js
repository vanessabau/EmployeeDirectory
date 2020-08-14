export const titles = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Regional Manager" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Assistant Regional Manager" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Regional Sales Director" },
  { _id: "5b21ca3eeb7f6fbccd471821", name: "Senior Accountant" },
  { _id: "5b21ca3eeb7f6fbccd471822", name: "Assistant to Regional Manager" },
  { _id: "5b21ca3eeb7f6fbccd471823", name: "Receptionist" },
  { _id: "5b21ca3eeb7f6fbccd471824", name: "Warehouse Forman" },
  { _id: "5b21ca3eeb7f6fbccd471825", name: "Customer Service" },
];

export function getTitles() {
  return titles.filter((t) => t);
}
