<script lang="ts">
  import { Popper } from "radix-svelte/internal/components";

  let arrowWidth: number = 10;
  let arrowHeight: number = 5;
  let arrow: boolean = false;

  let contentSide = "bottom";
  let contentSideOffset: number;
  let contentAlign = "center";
  let contentAlignOffset: number;
  let contentArrowPadding: number;
  let contentCollisionPadding: number;
  let contentSticky = "partial";
  let contentHideWhenDetached: boolean;
  let contentAvoidCollisions: boolean = true;

  let open = false;
</script>

<div class="grid place-items-center">
  <Popper.Root>
    <Popper.Anchor
      class="rounded-md bg-white px-4
			py-2 font-medium leading-none text-vermilion-800 shadow-lg hover:bg-vermilion-100"
      on:click={() => (open = true)}>Open</Popper.Anchor
    >
    {#if open}
      <Popper.Content
        class="rounded-lg bg-black/20 p-4"
        side={contentSide}
        sideOffset={contentSideOffset}
        align={contentAlign}
        alignOffset={contentAlignOffset}
        arrowPadding={contentArrowPadding}
        collisionPadding={contentCollisionPadding}
        sticky={contentSticky}
        hideWhenDetached={contentHideWhenDetached}
        avoidCollisions={contentAvoidCollisions}
      >
        <button on:click={() => (open = false)}>close</button>
        {#if arrow}
          <Popper.Arrow
            width={arrowWidth}
            height={arrowHeight}
            class="fill-black/20"
          />
        {/if}
      </Popper.Content>
    {/if}
  </Popper.Root>
</div>
