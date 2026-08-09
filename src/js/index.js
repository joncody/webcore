function get_global_environment() {
    if (globalThis !== undefined) {
        return globalThis;
    }
    if (window !== undefined) {
        return window;
    }
    return undefined;
}

const global_env = get_global_environment();
