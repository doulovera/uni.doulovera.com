export default function TallerDeProgramacion () {
  const links = [
    {
      name: 'repo',
      url: 'https://github.com/doulovera/taller-de-programacion-UTP',
    },
    {
      name: 'final project',
      url: 'https://github.com/doulovera/taller-de-programacion-UTP/blob/main/proyecto_final.java',
    }
  ]

  return (
    <div>
      <h1>Taller de Programación</h1>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="capitalize">
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}