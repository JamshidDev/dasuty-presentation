<template>
  <svg ref="svg" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid meet"
    style="width: 100vw; height: 100vh; display: block; background: transparent;" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as d3 from 'd3';

const mocData = [
  {
    "id": 4,
    "createdAt": "2025-06-13T07:22:23.131Z",
    "nameUz": "REESTR",
    "nameRu": "",
    "nameEn": "",
    "nameKiril": "",
    "descriptionUz": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    "descriptionRu": "",
    "descriptionEn": "",
    "descriptionKiril": "",
    "logo": "http://localhost:3000/file/e84e92c4-4d6f-48db-91a9-a847a3b91217.webp",
    "modules": [
      {
        "id": 1,
        "createdAt": "2025-06-13T07:43:19.554Z",
        "nameUz": "Payment Integration",
        "nameRu": "Payment Integration",
        "nameEn": "Payment Integration",
        "nameKiril": "Payment Integration",
        "descriptionUz": "Handles Payme and Click payment gateway integrations",
        "descriptionRu": "Handles Payme and Click payment gateway integrations",
        "descriptionEn": "Handles Payme and Click payment gateway integrations",
        "descriptionKiril": "Handles Payme and Click payment gateway integrations",
        "submodules": [
          {
            "id": 3,
            "createdAt": "2025-06-13T07:50:43.873Z",
            "nameUz": "Login Page",
            "nameRu": "Страница входа",
            "nameEn": "Login Page",
            "nameKiril": "Логин сахифаси",
            "status": "STARTED",
            "duration": 21,
            "startedDate": "2025-06-13T12:51:03.205Z",
            "lscDate": "2025-06-13T12:51:03.205Z"
          },
          {
            "id": 5,
            "createdAt": "2025-06-13T13:00:37.942Z",
            "nameUz": "Login Page",
            "nameRu": "Страница входа",
            "nameEn": "Login Page",
            "nameKiril": "Логин сахифаси",
            "status": "STARTED",
            "duration": 21,
            "startedDate": "2025-06-13T13:00:47.534Z",
            "lscDate": "2025-06-13T13:00:47.532Z"
          },
          {
            "id": 6,
            "createdAt": "2025-06-14T07:09:26.963Z",
            "nameUz": "Login Page",
            "nameRu": "Страница входа",
            "nameEn": "Login Page",
            "nameKiril": "Логин сахифаси",
            "status": "PENDING",
            "duration": 14,
            "startedDate": null,
            "lscDate": "2025-06-14T07:09:26.926Z"
          },
          {
            "id": 2,
            "createdAt": "2025-06-13T07:46:06.896Z",
            "nameUz": "Login Page",
            "nameRu": "Страница входа",
            "nameEn": "Login Page",
            "nameKiril": "Логин сахифаси",
            "status": "COMPLETED",
            "duration": 14,
            "startedDate": "2025-06-13T12:47:24.097Z",
            "lscDate": "2025-06-14T07:10:01.445Z"
          },
          {
            "id": 4,
            "createdAt": "2025-06-13T12:54:43.796Z",
            "nameUz": "Login Page",
            "nameRu": "Страница входа",
            "nameEn": "Login Page",
            "nameKiril": "Логин сахифаси",
            "status": "COMPLETED",
            "duration": 14,
            "startedDate": "2025-06-13T12:59:14.311Z",
            "lscDate": "2025-06-14T07:10:07.918Z"
          }
        ]
      },
      {
        "id": 3,
        "createdAt": "2025-06-14T07:12:57.655Z",
        "nameUz": "User Authentication",
        "nameRu": "User Authentication",
        "nameEn": "User Authentication",
        "nameKiril": "User Authentication",
        "descriptionUz": "Handles login, registration and authentication",
        "descriptionRu": "Handles login, registration and authentication",
        "descriptionEn": "Handles login, registration and authentication",
        "descriptionKiril": "Handles login, registration and authentication",
        "submodules": []
      }
    ]
  },
  {
    "id": 5,
    "createdAt": "2025-06-13T07:22:45.238Z",
    "nameUz": "KPI",
    "nameRu": "",
    "nameEn": "",
    "nameKiril": "",
    "descriptionUz": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    "descriptionRu": "",
    "descriptionEn": "",
    "descriptionKiril": "",
    "logo": "http://localhost:3000/file/ae128bb2-594b-478b-80db-66da2179e7d2.webp",
    "modules": []
  },
  {
    "id": 6,
    "createdAt": "2025-06-13T07:23:07.438Z",
    "nameUz": "Railmap",
    "nameRu": "",
    "nameEn": "",
    "nameKiril": "",
    "descriptionUz": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    "descriptionRu": "",
    "descriptionEn": "",
    "descriptionKiril": "",
    "logo": "http://localhost:3000/file/88cd4b49-95ee-44b7-883b-9dc522f1b6fe.webp",
    "modules": []
  }
]



const width = 1200;
const height = 900;
const svg = ref();

const nodes = [
  { id: 'center', label: 'Store Dynamics', type: 'center', value: '87%' }
];
const links = [];

mocData.forEach(project => {
  const projectId = `project-${project.id}`;
  nodes.push({
    id: projectId,
    label: project.nameUz,
    value: project.nameUz,
    type: 'project'
  });
  links.push({
    source: 'center',
    target: projectId
  });

  project.modules.forEach(module => {
    const moduleId = `module-${module.id}`;
    nodes.push({
      id: moduleId,
      label: module.nameUz,
      value: module.nameUz,
      type: 'percent'
    });
    links.push({
      source: projectId,
      target: moduleId
    });

    module.submodules.forEach(submodule => {
      const subId = `submodule-${submodule.id}`;
      nodes.push({
        id: subId,
        label: submodule.nameUz,
        value: submodule.nameUz,
        type: 'submodules',
        status: submodule.status
      });
      links.push({
        source: moduleId,
        target: subId
      });
    });
  });
});


onMounted(() => {
  const svgEl = d3.select(svg.value);

  svgEl.append("defs").html(`
    <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ff6ea1"/>
      <stop offset="100%" stop-color="#ffcad4"/>
    </radialGradient>
    <radialGradient id="mainGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="100%" stop-color="#60a5fa"/>
    </radialGradient>
    <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff6ea1"/>
      <stop offset="100%" stop-color="#a18cd1"/>
    </linearGradient>
  `);

  svgEl.append('defs').html(`
    <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.3" />
    </filter>
  `);


  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links)
      .id(d => d.id)
      .distance(d => {
        if (d.source.id === 'center') return 220;
        if (d.source.type === 'main') return 220;
        if (d.source.type === 'percent') return 220;
        if (d.source.type === 'submodules') return 220;
        return 220;
      }))
    .force('charge', d3.forceManyBody().strength(-900))
    .force('center', d3.forceCenter(width / 2, height / 2));

  const link = svgEl.append('g')
    .attr('stroke', '#e2e8f0')
    .attr('stroke-width', 2)
    .selectAll('line')
    .data(links)
    .join('line');

  const node = svgEl.append('g')
    .selectAll('g')
    .data(nodes)
    .join('g')
    .call(drag(simulation));

  // Center node special design
  const centerNode = node.filter(d => d.type === 'center');

  const percentNode = node.filter(d => d.type === 'percent');

  percentNode.append('circle') // Outer ring
    .attr('r', 60)
    .attr('fill', 'none')
    .attr('stroke', '#023AFF')
    .attr('stroke-width', 10);

  percentNode.append('circle') // Inner white circle
    .attr('r', 20)
    .attr('fill', '#023AFF');

  centerNode.append('circle') // Outer ring
    .attr('r', 120)
    .attr('fill', 'none')
    .attr('stroke', 'url(#centerGradient)')
    .attr('stroke-width', 30);

  centerNode.append('circle') // Inner white circle with shadow
    .attr('r', 90)
    .attr('fill', 'white')
    .attr('filter', 'url(#drop-shadow)');


  centerNode.append('rect') // Icon (diamond)
    .attr('x', -10)
    .attr('y', -50)
    .attr('width', 20)
    .attr('height', 20)
    .attr('transform', 'rotate(45)')
    .attr('fill', '#00d3ff33');

  centerNode.append('rect') // Icon (diamond)
    .attr('x', -20)
    .attr('y', -10)
    .attr('width', 20)
    .attr('height', 20)
    .attr('transform', 'rotate(45)')
    .attr('fill', '#00d3ff33');

  centerNode.append('rect') // Icon (diamond)
    .attr('x', -50)
    .attr('y', -10)
    .attr('width', 20)
    .attr('height', 20)
    .attr('transform', 'rotate(45)')
    .attr('fill', '#00d3ff33');

  centerNode.append('text') // Label
    .text('STORE DYNAMICS')
    .attr('y', -20)
    .attr('text-anchor', 'middle')
    .attr('fill', '#334155')
    .attr('font-size', '12px')
    .attr('font-weight', '600');

  centerNode.append('text') // Value
    .html(d => d.value)
    .attr('y', 25)
    .attr('text-anchor', 'middle')
    .attr('fill', '#1f2937')
    .attr('font-size', '34px')
    .attr('font-weight', '700');

  // Other nodes
  const otherNodes = node.filter(d => d.type !== 'center');

  otherNodes.append('circle')
    .attr('r', d => d.type === 'main' ? 40 : 60)
    .attr('fill', d => d.type === 'main' ? 'url(#mainGradient)' : d.type === 'submodules' ? '#f9a8d4' : '#1B1C40')
    .attr('stroke', '#ccc')
    .attr('stroke-width', 2)
    .attr('filter', 'url(#drop-shadow)');


  otherNodes.append('text')
    .text(d => d.value)
    .attr('text-anchor', 'middle')
    .attr('dy', '0.35em')
    .attr('fill', '#fff')
    .style('font-size', d => d.type === 'percent' ? '12px' : '14px')
    .style('pointer-events', 'none');

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node.attr('transform', d => `translate(${d.x},${d.y})`);
  });
});

function drag(simulation) {
  return d3.drag()
    .on('start', (event, d) => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    })
    .on('drag', (event, d) => {
      d.fx = event.x;
      d.fy = event.y;
    })
    .on('end', (event, d) => {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    });
}
</script>

<style scoped>
svg {
  background: transparent !important
}
</style>
