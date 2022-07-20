export const tags = {
  mumbai: {
    tests: [
      {
        type: "lit",
        accessControlConditions: [
          {
            contractAddress: "",
            standardContractType: "",
            chain: "mumbai",
            method: "eth_getBalance",
            parameters: [":userAddress", "latest"],
            returnValueTest: {
              comparator: ">=",
              value: "10000000000000",
            },
          },
        ],
        resourceId: {
          baseUrl: "",
          path: "",
          orgId: "universal-tags",
          role: "",
          extraData: '{"category": "finance", "gracePeriod": "100000", "icon": "", "color": "" }',
        },
      },
      {
        type: "lit",
        accessControlConditions: [
          [
            {
              contractAddress: "0xc716950e5deae248160109f562e1c9bf8e0ca25b",
              standardContractType: "ERC1155",
              chain: "mumbai",
              method: "balanceOf",
              parameters: [":userAddress", "95"],
              returnValueTest: {
                comparator: ">",
                value: "0",
              },
            },
          ],
        ],
        resourceId: {
          baseUrl: "",
          path: "",
          orgId: "universal-tags",
          role: "",
          extraData: '{"category": "gaming", "gracePeriod": "100000", "icon": "", "color": "" }',
        },
      },
    ],
  },
};
