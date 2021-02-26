export function ExperienceBar(){
  return (
    <header className="experience-bar">
      <span>0 px</span>
      <div>
        {/* Esse estilo tá inline pois vai ser variavel, não mantenho no css pois é fixo */}
        <div style={{ width: '50%' }} />

        <span className="current-experience" style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 px</span>
    </header>
  );
}