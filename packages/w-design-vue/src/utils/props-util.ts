
export const hasProp = (instance: any, prop: any) => {
    const $options = instance.$options || {};
    const propsData = $options.propsData || {};
    return prop in propsData;
};
