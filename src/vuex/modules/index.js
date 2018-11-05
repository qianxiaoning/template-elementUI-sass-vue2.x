import level1 from "./level1";
import level2 from "./level2";
import level3 from "./level3";

export default {
    // 分大模块
    ...level1,
    ...level2,
    ...level3
};