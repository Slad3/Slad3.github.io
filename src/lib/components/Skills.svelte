<script lang="ts">
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
  import Card from "@smui/card";

  import awsIcon from "$lib/images/icons/awsIcon.png";
  import javaIcon from "$lib/images/icons/javaIcon.png";
  import linuxIcon from "$lib/images/icons/linuxIcon.png";
  import pythonIcon from "$lib/images/icons/pythonIcon.png";
  import rustIcon from "$lib/images/icons/rustIcon.png";
  import typescriptIcon from "$lib/images/icons/typescriptIcon.png";

  let panelOpen = false;

  const mainSkills = {
    Python: {
      iconURL: pythonIcon,
      subSkills: [
        "Flask/Fastapi",
        "NumPy",
        "Pandas",
        "MatPlotLib",
        "Plotly",
        "TensorFlow",
      ],
    },
    AWS: {
      iconURL: awsIcon,
      subSkills: [
        "Lambda",
        "EC2",
        "S3",
        "Cognito",
        "SQS",
        "Cloudwatch",
        "Rekognition",
      ],
    },
    TypeScript: {
      iconURL: typescriptIcon,
      subSkills: [
        "Vue3",
        "Svelte (This site!)",
        "Angular",
        "Leaflet",
        "Express",
        "Raw HTML/CSS/TypeScript",
        "React",
      ],
    },
    Linux: {
      iconURL: linuxIcon,
      subSkills: [
        "Systemctl Services",
        "Raspberry Pi Development",
        "GUI and terminal/SSH",
        "Debian and Arch",
        "Apache & Nginx http Server",
        "Bash Scripting",
      ],
    },
    "Java/Kotlin": {
      iconURL: javaIcon,
      subSkills: [
        "DOM & Stax XML Parsing",
        "Android Development",
        "Jooby Microframework",
        "Maven & Gradle",
        "Multithreaded Workloads",
        "JSON/CSV Parsing",
      ],
    },

    "Other Languages / Framworks": {
      subSkills: [
        "SQL",
        "MongoDB",
        "Postgres TimescaleDB",
        "C/C++",
        "Swift",
        "C#",
      ],
    },
    Rust: {
      iconURL: rustIcon,
      subSkills: ["Rocket", "Rocket_ws", "Serde (serde_json)", "pyo3"],
    },
    "Other Skills": {
      subSkills: [
        "Public Speaking",
        "Jira",
        "Audio Production",
        "Digital Ocean",
        "Microsoft Azure",
        "Microsoft Office",
      ],
    },
  };
</script>

<div class="block skillsBlock">
  <h1 class="sectionTitle">Skills</h1>

  <Accordion multiple>
    <Panel bind:open={panelOpen} style="background-color: transparent">
      <LayoutGrid>
        {#each Object.keys(mainSkills).splice(0, 6) as skill}
          <Cell span={4} class="skillCard">
            <Card style="padding: 10px;">
              <h1>
                {#if mainSkills[skill].iconURL}<img
                    class="icon"
                    alt="Icon of {skill}"
                    src={mainSkills[skill].iconURL}
                  />{/if}<span class="skillTitle">{skill}</span>
              </h1>

              <ul>
                {#each mainSkills[skill].subSkills as subSkill}
                  <li>{subSkill}</li>
                {/each}
              </ul>
            </Card>
          </Cell>
        {/each}
      </LayoutGrid>

      <Header
        style="color: whitesmoke;
                 background-color: rgba(28, 28, 28, 0.8);"
      >
        <h1>
          {#if panelOpen}Show Less Skills{:else}Show All Skills{/if}
        </h1>
      </Header>

      <Content>
        <LayoutGrid>
          {#each Object.keys(mainSkills).splice(6, Object.keys(mainSkills).length) as skill}
            <Cell span={6} class="skillCard">
              <Card style="min-width: 300px;">
                <h1>
                  {#if mainSkills[skill].iconURL}
                    <img
                      class="icon"
                      alt={mainSkills[skill].iconURL}
                      src={mainSkills[skill].iconURL}
                    />
                  {/if}

                  <span class="skillTitle">{skill}</span>
                </h1>

                <ul>
                  {#each mainSkills[skill].subSkills as subSkill}
                    <li>{subSkill}</li>
                  {/each}
                </ul>
              </Card>
            </Cell>
          {/each}
        </LayoutGrid>
      </Content>
    </Panel>
  </Accordion>
</div>

<style>
  .skillsBlock {
    max-width: 1280px;
  }

  .icon {
    margin-left: 5%;
    width: 50px;
    height: 50px;
    float: left;
  }

  .skillTitle {
    float: right;
    margin-right: 5px;
    font-size: larger;
  }
</style>
