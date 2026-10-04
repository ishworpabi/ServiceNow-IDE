import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "4dc058c15dab4d65b800a0bd4c20f98e"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "6bfdc133fbaa47a2a33d24c608c7fa84"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "a360e7371f144d3091ffad67f834dc9c"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "4ef4cfdeea4443a8863de35ca31104a0"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "23441064bf4d4283a81afaa3682a3bc4",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "d4c067ffc5d847f8946460577911944a",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "c19d76628c1044988dccdae50b88f3fe",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
