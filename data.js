// Nodos: cada objeto representa un ramo. Se agregaron de acuerdo al semestre.
const nodes = new vis.DataSet([
  // Semestre I
  { id: "n0", label: "Cálculo I\n8 cr." },
  { id: "n1", label: "Introducción a la Ing. Industrial\n10 cr." },
  { id: "n2", label: "Fundamentos Filosóficos\n4 cr." },
  
  // Semestre II
  { id: "n3", label: "Álgebra Lineal\n7 cr." },
  { id: "n4", label: "Cálculo II\n7 cr." },
  { id: "n5", label: "Química\n6 cr." },
  { id: "n6", label: "Comunicación Ingenieril\n6 cr." },
  { id: "n7", label: "Fundamentos Teológicos\n4 cr." },
  
  // Semestre III
  { id: "n8", label: "Cálculo III\n7 cr." },
  { id: "n9", label: "Estática y Dinámica\n7 cr." },
  { id: "n10", label: "Probabilidades y Estadística\n7 cr." },
  { id: "n11", label: "Programación Aplicada\n6 cr." },
  { id: "n12", label: "Doctrina Social de la Iglesia\n4 cr." },
  
  // Semestre IV
  { id: "n13", label: "Modelamiento Matemático\n6 cr." },
  { id: "n14", label: "Ética Empresarial Y Social\n4 cr." },
  { id: "n15", label: "Análisis Multivariado\n6 cr." },
  { id: "n16", label: "Termodinámica\n6 cr." },
  { id: "n17", label: "Ecuaciones Diferenciales\n7 cr." },
  
  // Semestre V
  { id: "n18", label: "Mec. de Cuerpos Rígidos y Fluidos\n6 cr." },
  { id: "n19", label: "Electromagnetismo y Circuitos\n7 cr." },
  { id: "n20", label: "Investigación de Operaciones\n6 cr." },
  { id: "n21", label: "Inglés I\n6 cr." },
  { id: "n22", label: "Modelos de Pronósticos\n6 cr." },
  
  // Semestre VI
  { id: "n23", label: "Proc. Químicos y Térmicos\n6 cr." },
  { id: "n24", label: "Electrónica Industrial y Automatización\n6 cr." },
  { id: "n25", label: "Mod Estocásticos y Simulación\n6 cr." },
  { id: "n26", label: "Inglés II\n6 cr." },
  { id: "n27", label: "Integración de Saberes\n5 cr." },
  { id: "n28", label: "Procesos Mecánicos\n6 cr." },
  
  // Semestre VII
  { id: "n29", label: "Economía\n6 cr." },
  { id: "n30", label: "Gestión de Operaciones I\n6 cr." },
  { id: "n31", label: "Inglés III\n6 cr." },
  { id: "n32", label: "Administración y RRHH\n6 cr." },
  { id: "n33", label: "Energía y Medioambiente\n6 cr." },
  
  // Semestre VIII
  { id: "n34", label: "Contabilidad y Finanzas\n6 cr." },
  { id: "n35", label: "Gestión de Operaciones II\n6 cr." },
  { id: "n36", label: "Legislación Empresarial\n5 cr." },
  { id: "n37", label: "Plan Estratégico y Gestión de Negocios\n6 cr." },
  { id: "n38", label: "Marketing Estratégico\n6 cr." },
  
  // Semestre IX
  { id: "n39", label: "Ingeniería Económica\n6 cr." },
  { id: "n40", label: "Sist. de Apoyo Toma de Decisiones\n6 cr." },
  { id: "n41", label: "Optativo de Profundización\n5 cr." },
  { id: "n42", label: "Gest. de Calidad Product y Mantención\n6 cr." },
  { id: "n43", label: "Control de Gestión\n6 cr." },
  { id: "n44", label: "Formulación de Proyectos\n6 cr." },
  { id: "n45", label: "PI Gestión de Operaciones\n8 cr." },
  // Ramo extra en Sem. IX:
  { id: "n49", label: "PI de Procesos Industriales\n5 cr." },
  
  // Semestre X
  { id: "n50", label: "Integración de Saberes\n5 cr." },
  { id: "n51", label: "PI Evaluación Técnico/econom\n8 cr." },
  { id: "n52", label: "Optativo de Profundización\n5 cr." },
  { id: "n53", label: "Optativo de Profundización\n5 cr." },
  { id: "n54", label: "Optativo de Profundización\n5 cr." },
  
  // Semestre XI
  { id: "n55", label: "Proyecto de Título\n30 cr." },
  { id: "n56", label: "Álgebra\n8 cr." },
  // Ramo extra en Sem. XI:
  { id: "n57", label: "PI de RRHH y Negocios\n5 cr." }
]);

// Relaciones o requisitos: cada edge indica que para tomar el ramo destino se requiere haber aprobado el ramo origen.
// Se distinguen dos tipos:
// - "continuidad": requisito de continuidad (línea sólida)
// - "crédito": requisito de acumulación de créditos (línea discontinua)
const edges = new vis.DataSet([
  // Semestre II
  { from: "n0", to: "n3", label: "continuidad" },
  { from: "n0", to: "n4", label: "continuidad" },
  { from: "n0", to: "n5", label: "crédito", dashes: [5,5] },
  { from: "n1", to: "n6", label: "continuidad" },
  { from: "n2", to: "n7", label: "continuidad" },
  
  // Semestre III
  { from: "n4", to: "n8", label: "continuidad" },
  { from: "n4", to: "n9", label: "continuidad" },
  { from: "n3", to: "n10", label: "continuidad" },
  { from: "n4", to: "n10", label: "continuidad" },
  { from: "n1", to: "n11", label: "crédito", dashes: [5,5] },
  { from: "n7", to: "n12", label: "continuidad" },
  
  // Semestre IV
  { from: "n8", to: "n13", label: "crédito", dashes: [5,5] },
  { from: "n10", to: "n13", label: "crédito", dashes: [5,5] },
  { from: "n12", to: "n14", label: "continuidad" },
  { from: "n10", to: "n15", label: "continuidad" },
  { from: "n8", to: "n16", label: "continuidad" },
  { from: "n8", to: "n17", label: "continuidad" },
  
  // Semestre V
  { from: "n9", to: "n18", label: "continuidad" },
  { from: "n16", to: "n19", label: "continuidad" },
  { from: "n13", to: "n20", label: "continuidad" },
  // n21 (Inglés I) sin requisito declarado
  { from: "n10", to: "n22", label: "crédito", dashes: [5,5] },
  
  // Semestre VI
  { from: "n5", to: "n23", label: "crédito", dashes: [5,5] },
  { from: "n16", to: "n23", label: "continuidad" },
  { from: "n11", to: "n24", label: "crédito", dashes: [5,5] },
  { from: "n22", to: "n25", label: "continuidad" },
  { from: "n21", to: "n26", label: "continuidad" },
  { from: "n2", to: "n27", label: "crédito", dashes: [5,5] },
  { from: "n13", to: "n28", label: "continuidad" },
  
  // Semestre VII
  // n29 (Economía) sin requisito declarado
  { from: "n20", to: "n30", label: "continuidad" },
  { from: "n26", to: "n31", label: "continuidad" },
  { from: "n7", to: "n32", label: "crédito", dashes: [5,5] },
  { from: "n12", to: "n32", label: "crédito", dashes: [5,5] },
  { from: "n16", to: "n33", label: "crédito", dashes: [5,5] },
  
  // Semestre VIII
  { from: "n29", to: "n34", label: "continuidad" },
  { from: "n30", to: "n35", label: "continuidad" },
  { from: "n32", to: "n36", label: "continuidad" },
  { from: "n32", to: "n37", label: "continuidad" },
  { from: "n37", to: "n38", label: "continuidad" },
  
  // Semestre IX
  { from: "n29", to: "n39", label: "continuidad" },
  { from: "n27", to: "n40", label: "continuidad" },
  // n41 (Optativo) sin requisito declarado
  { from: "n44", to: "n42", label: "continuidad" },
  { from: "n35", to: "n43", label: "continuidad" },
  { from: "n37", to: "n44", label: "continuidad" },
  { from: "n44", to: "n45", label: "continuidad" },
  // Ramo extra: PI de Procesos Industriales
  { from: "n20", to: "n49", label: "crédito", dashes: [5,5] },
  { from: "n30", to: "n49", label: "continuidad" },
  
  // Semestre X
  { from: "n27", to: "n50", label: "crédito", dashes: [5,5] },
  { from: "n43", to: "n51", label: "continuidad" },
  { from: "n44", to: "n51", label: "crédito", dashes: [5,5] },
  // n52, n53, n54 sin requisito declarado
  
  // Semestre XI
  { from: "n51", to: "n55", label: "crédito", dashes: [5,5] },
  { from: "n50", to: "n55", label: "continuidad" },
  { from: "n3", to: "n56", label: "continuidad" },
  // Ramo extra: PI de RRHH y Negocios
  { from: "n32", to: "n57", label: "crédito", dashes: [5,5] },
  { from: "n51", to: "n57", label: "continuidad" },
]);
