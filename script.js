const data = {
  name: "Internship Program",
  type: "root",
  children: [
    {
      name: "HR Department",
      type: "dept",
      children: [
        {
          name: "Mentors",
          type: "group",
          children: [
            { name: "Debra Dralle\n(HR Manager)", type: "mentor" },
            { name: "Mindy Isaac\n(HR Mentor)", type: "mentor" }
          ]
        },
        {
          name: "Interns",
          type: "group",
          children: [
            { name: "Maryam Atif", type: "intern" },
            { name: "Ailee Sun", type: "intern" },
            { name: "Ximena Torres", type: "intern" },
            { name: "Abby Denmon", type: "intern" },
            { name: "Jessica Elie", type: "intern" },
            { name: "Naomi Mendoza", type: "intern" },
            { name: "Sohail Hussain", type: "intern" },
            { name: "Matthew Connot", type: "intern" },
            { name: "Mia Frowen", type: "intern" },
            { name: "Sahra Kabadhe", type: "intern" },
            { name: "Abigail Shih", type: "intern" },
            { name: "Kimi Pierson", type: "intern" },
            { name: "Anahi Hernandez", type: "intern" },
            { name: "Melanie Saines", type: "intern" },
            { name: "Destiney Kerchner", type: "intern" },
            { name: "Chidimma Ejiofor", type: "intern" },
            { name: "Kassandra Santana", type: "intern" },
            { name: "Anthony Ramirez", type: "intern" },
            { name: "Sean Ong", type: "intern" }
          ]
        }
      ]
    },
    {
      name: "Tech Department",
      type: "dept",
      children: [
        {
          name: "Mentors/Managers",
          type: "group",
          children: [
            { name: "David Ndoma\n(Tech Department Manager/Mentor)", type: "mentor" },
            { name: "Lasya Inguva\n(Tech Department Manager)", type: "mentor" }
          ]
        },
        {
          name: "Interns",
          type: "group",
          children: [
            { name: "Anyik Duku\n(Software Testing)", type: "intern" },
            { name: "Brooklyn Vaughns\n(Web Design)", type: "intern" },
            { name: "Mirna Lopez\n(Web Design)", type: "intern" },
            { name: "Quoc Le\n(Web Development)", type: "intern" },
            { name: "Jinesh Patel\n(Web Development)", type: "intern" },
            { name: "Ravi Sashank\n(Web Development)", type: "intern" },
            { name: "Anish Kuvelkar\n(UI/UX Designer)", type: "intern" },
            { name: "Aniqa Rahman\n(Data Science)", type: "intern" },
            { name: "Juan Pablo Arredondo\n(Data Science)", type: "intern" },
            { name: "Soham Hariprasad Katkar\n(Data Science)", type: "intern" }
          ]
        }
      ]
    },
    {
      name: "Operations Department",
      type: "dept",
      children: [
        {
          name: "Mentor",
          type: "group",
          children: [{ name: "Mohammed Yassin\n(Operations Mentor)", type: "mentor" }]
        },
        {
          name: "Interns",
          type: "group",
          children: [
            { name: "Alzora Norton\n(Business Analyst)", type: "intern" },
            { name: "Chiamaka Ebulu\n(Business Analyst)", type: "intern" },
            { name: "Tomi Oladipo\n(Business Analyst)", type: "intern" },
            { name: "Tobi Oladipo\n(Business Analyst)", type: "intern" },
            { name: "Lydia Mayenge\n(Business Analyst)", type: "intern" },
            { name: "Prapti Kansagra\n(Business Analyst)", type: "intern" },
            { name: "Wenxin Cui\n(Operations)", type: "intern" },
            { name: "Rohan Kalpavruksha\n(Operations)", type: "intern" },
            { name: "Paola Mawaw\n(Operations)", type: "intern" }
          ]
        }
      ]
    },
    {
      name: "Program Development",
      type: "dept",
      children: [
        {
          name: "Mentor",
          type: "group",
          children: [{ name: "Gloria Deloney\n(Program Development Mentor)", type: "mentor" }]
        },
        {
          name: "Interns",
          type: "group",
          children: [
            { name: "Geraldine Ly\n(Resource Navigator & Program Development)", type: "intern" },
            { name: "Peyton McLaughlin\n(Resource Navigator & Program Development)", type: "intern" },
            { name: "Nishita Balaji\n(Resource Navigator & Program Development)", type: "intern" },
            { name: "Sophie Sorkin\n(Resource Navigator & Program Development)", type: "intern" },
            { name: "Trisha Venkatesan\n(Resource Navigator & Program Development)", type: "intern" },
            { name: "Charlotte Anderson\n(Resource Navigator & Program Development)", type: "intern" },
            { name: "Zabeena Mohammed\n(Resource Navigator & Program Development)", type: "intern" },
            { name: "Senay Wells\n(Resource Navigator & Program Development)", type: "intern" },
            { name: "Vanessa Chen\n(Program Development/Resource Navigator)", type: "intern" }
          ]
        }
      ]
    },
    {
      name: "Business Development",
      type: "dept",
      children: [
        {
          name: "Mentor",
          type: "group",
          children: [{ name: "Cathie Walters\n(Business Development Mentor)", type: "mentor" }]
        },
        {
          name: "Interns",
          type: "group",
          children: [
            { name: "Carlin Sutter\n(Marketing)", type: "intern" },
            { name: "Taisha Shorter\n(Writing)", type: "intern" }
          ]
        }
      ]
    },
    {
      name: "Nonprofit Leadership & Management",
      type: "dept",
      children: [
        {
          name: "Interns",
          type: "group",
          children: [
            { name: "Mary Lima\n(also HR)", type: "intern" },
            { name: "Angela Philpot", type: "intern" },
            { name: "Mama Sanogo", type: "intern" },
            { name: "Brittney Horton", type: "intern" },
            { name: "Takia Williams", type: "intern" }
          ]
        }
      ]
    },
    {
      name: "Clinical/Therapy (Programs)",
      type: "dept",
      children: [
        {
          name: "Supervised Interns",
          type: "group",
          children: [
            { name: "Ashley Dupont\n(MFT Intern)", type: "intern" },
            { name: "Jack Porter\n(Psychology Intern)", type: "intern" }
          ]
        }
      ]
    }
  ]
};

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("#mindmap")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const g = svg.append("g");
const tooltip = d3.select("#tooltip");

// Zoom behavior
const zoom = d3.zoom()
  .scaleExtent([0.2, 6])
  .on("zoom", (event) => {
    g.attr("transform", event.transform);
  });

svg.call(zoom);

// Build tree
const root = d3.hierarchy(data);
root.dx = 60;
root.dy = width / (root.height + 1);

const tree = d3.tree().nodeSize([root.dx, root.dy]);
tree(root);

let x0 = Infinity;
let x1 = -x0;
root.each(d => {
  if (d.x > x1) x1 = d.x;
  if (d.x < x0) x0 = d.x;
});

const rootY = root.y;

// Initial transform
const k = 0.75;
const initialTransform = d3.zoomIdentity
  .translate(width / 2 - rootY * k, height / 2 - ((x0 + x1) / 2) * k)
  .scale(k);

g.attr("transform", initialTransform);
svg.call(zoom.transform, initialTransform);

// Draw links
g.append("g")
  .attr("class", "links")
  .selectAll("path")
  .data(root.links())
  .join("path")
  .attr("class", "link")
  .attr("d", d3.linkHorizontal()
    .x(d => d.y)
    .y(d => d.x));

// Draw nodes
const node = g.append("g")
  .attr("class", "nodes")
  .selectAll("g")
  .data(root.descendants())
  .join("g")
  .attr("class", d => `node ${d.data.type}-node`)
  .attr("transform", d => `translate(${d.y},${d.x})`);

node.append("circle")
  .attr("r", d => {
    if (d.data.type === "dept") return 10;
    else if (d.data.type === "mentor") return 7;
    else if (d.data.type === "intern") return 6;
    else return 5;
  });

node.append("text")
  .attr("dy", "0.32em")
  .attr("x", d => d.children ? -14 : 14)
  .attr("text-anchor", d => d.children ? "end" : "start")
  .style("font-size", d => d.data.type === "dept" ? "13px" : "11px")
  .call(text => text.each(function(d) {
    const lines = d.data.name.split('\n');
    const tspan = d3.select(this);
    tspan.text(null);
    lines.forEach((line, i) => {
      tspan.append("tspan")
        .attr("x", d.children ? -14 : 14)
        .attr("dy", i === 0 ? "0em" : "1.1em")
        .text(line);
    });
  }));

// Tooltip
node.on("mouseover", (event, d) => {
  tooltip
    .style("opacity", 1)
    .html(`<strong>${d.data.name.replace(/\n/g, '<br>')}</strong>`);
})
.on("mousemove", (event) => {
  tooltip
    .style("left", (event.pageX + 10) + "px")
    .style("top", (event.pageY - 10) + "px");
})
.on("mouseleave", () => {
  tooltip.style("opacity", 0);
});

// Handle window resize
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  svg.attr("width", newWidth).attr("height", newHeight);
});
