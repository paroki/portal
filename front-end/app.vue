<script setup lang="ts">
  import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'radix-vue'
</script>

<template>
  <div class="w-full h-64 p-8 text-green9 font-medium text-sm">
    <SplitterGroup id="splitter-group-1" direction="horizontal">
      <SplitterPanel
        id="splitter-group-1-panel-1"
        :min-size="20"
        class="bg-green-300 rounded-xl flex items-center justify-center">
        Hello Paroki
      </SplitterPanel>
      <SplitterResizeHandle id="splitter-group-1-resize-handle-1" class="w-2" />
      <SplitterPanel id="splitter-group-1-panel-2" :min-size="20">
        <SplitterGroup id="splitter-group-2" direction="vertical">
          <SplitterPanel
            id="splitter-group-2-panel-1"
            :min-size="20"
            class="bg-blue-300 rounded-xl flex items-center justify-center">
            Zero Config
          </SplitterPanel>
          <SplitterResizeHandle id="splitter-group-2-resize-handle-1" class="h-2" />
          <SplitterPanel
            id="splitter-group-2-panel-2"
            :min-size="20"
            class="bg-red-300 rounded-xl flex items-center justify-center">
            Resizable Panels
          </SplitterPanel>
        </SplitterGroup>
      </SplitterPanel>
    </SplitterGroup>
  </div>
</template>
