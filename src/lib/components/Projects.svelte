<script lang="ts">
  import { onMount } from "svelte";

  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import IconButton, { Icon } from "@smui/icon-button";
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";

  import Project from "./Project.svelte";

  import { fetchJSONData } from "$lib/composables/data-loader";
  import { projects } from "$lib/staticData/projects";

  //   let projects = [];
  let panelOpen = false;
  let dataAvailable = false;

  onMount(async () => {
    // Disbled till squarspace fixes their garbage domain service
    // projects = await fetchJSONData("projects");
    dataAvailable = projects.length > 0;
  });
</script>

<div class="block">
  <Accordion multiple>
    <h1 class="sectionTitle">Personal Projects</h1>
    {#if dataAvailable}
      <Panel bind:open={panelOpen} style="background-color: transparent">
        <LayoutGrid>
          {#each projects as project}
            {#if !project.hidden && project.pin}
              <Cell span={6}>
                <Project {project} />
              </Cell>
            {/if}
          {/each}
        </LayoutGrid>

        <Header
          style="color: whitesmoke;
                     background-color: rgba(28, 28, 28, 0.8);"
        >
          <h1>
            {#if panelOpen}Show Less Projects{:else}Show All Projects{/if}
          </h1>
          <IconButton slot="icon" toggle pressed={panelOpen}>
            <Icon class="material-icons" on></Icon>
            <Icon class="material-icons"></Icon>
          </IconButton>
        </Header>

        <Content>
          <LayoutGrid>
            {#each projects as project}
              {#if !project.hidden && !project.pin}
                <Cell span={6}>
                  <Project {project} />
                </Cell>
              {/if}
            {/each}
          </LayoutGrid>
        </Content>
      </Panel>
    {/if}
  </Accordion>
</div>

<style>
</style>
