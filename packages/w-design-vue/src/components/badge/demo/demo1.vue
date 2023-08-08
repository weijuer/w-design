<template>
    <w-badge content="5" status="danger"></w-badge>
    <w-badge content="15" status="success"></w-badge>
    <w-badge content="Hot" status="info"></w-badge>
    <w-badge content="Hot" status="warning"></w-badge>
    <w-badge content="Hot" color="#f00"></w-badge>


    <w-badge content="5">
        <template #content>
            Hot
        </template>
    </w-badge>

    <w-badge content="5">
        <w-avatar>W</w-avatar>
    </w-badge>

    <w-badge dot status="danger">
        <w-avatar>W</w-avatar>
    </w-badge>


    <w-badge content="200" max="99" status="danger"></w-badge>
</template>

<script lang="ts" setup>

</script>