<script lang="ts">
  import { onMount } from "svelte";

  import Card from "@smui/card";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import IconButton, { Icon } from "@smui/icon-button";
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";

  import { fetchJSONData } from "$lib/composables/data-loader";
  import { publications } from "$lib/staticData/publications";

//   let publications = [];

  let panelOpen = false;

  onMount(async () => {
    // Disbled till squarspace fixes their garbage domain service
    // publications = await fetchJSONData("publications");
  });
</script>

<div class="block">
  <Accordion multiple>
    <h1 class="sectionTitle">Publications / Presentations</h1>
    <Panel bind:open={panelOpen} style="background-color: transparent">
      <LayoutGrid>
        {#each publications.slice(0, 2) as { title, conference, date, notes }}
          <Cell span={6}>
            <Card>
              <div class="pub">
                <h1 class="publicationTitle">{title}</h1>
                <div class="publicationTitleBar">
                  <div class="conferenceTitle">
                    <p>{conference}</p>
                  </div>

                  <div class="corner">
                    <p>{date}</p>
                  </div>
                </div>

                {#if notes.length > 0}
                  <h4>Notes:</h4>
                  {#each notes as note}
                    <p>- {note}</p>
                  {/each}
                {/if}
              </div>
            </Card>
          </Cell>
        {/each}
      </LayoutGrid>

      <!-- <LayoutGrid>
				{#each publications.slice(0, 2) as { title, conference, date, notes }}
					<Cell span={6}>
						<Card>
							<div class="pub">
								<h1>{title}</h1>
								<LayoutGrid style="padding: 2px">
									<Cell span={3}><p>{date}</p></Cell>
									<Cell span={9} style="text-align: right;"><p>{conference}</p></Cell>
								</LayoutGrid>

								{#if notes.length > 0}
									<h4>Notes:</h4>
									{#each notes as note}
										<p>- {note}</p>
									{/each}
								{/if}
							</div>
						</Card>
					</Cell>
				{/each}
			</LayoutGrid> -->

      <Header
        style="color: whitesmoke;
                     background-color: rgba(28, 28, 28, 0.8);"
      >
        <h1>
          {#if panelOpen}Show Less Publications{:else}Show All Publications{/if}
        </h1>
        <IconButton slot="icon" toggle pressed={panelOpen}>
          <Icon class="material-icons" on></Icon>
          <Icon class="material-icons"></Icon>
        </IconButton>
      </Header>

      <Content>
        <LayoutGrid>
          {#each publications.slice(2, publications.length) as { title, conference, date, notes }}
            <Cell span={6}>
              <Card>
                <div class="pub">
                  <h1>{title}</h1>
                  <LayoutGrid style="padding: 2px">
                    <Cell span={3}><p>{date}</p></Cell>
                    <Cell span={9} style="text-align: right;"
                      ><p>{conference}</p></Cell
                    >
                  </LayoutGrid>

                  {#if notes.length > 0}
                    <h4>Notes:</h4>
                    {#each notes as note}
                      <p>- {note}</p>
                    {/each}
                  {/if}
                </div>
              </Card>
            </Cell>
          {/each}
        </LayoutGrid>
      </Content>
    </Panel>
  </Accordion>
</div>

<style>
  .pub {
    margin: 0px;
  }

  .publicationTitleBar {
    display: flex;
    justify-content: space-between;
  }

  .conferenceTitle {
    width: 100%;
    font-weight: bold;
  }
</style>
