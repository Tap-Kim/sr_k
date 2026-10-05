/**
 * /sr_k/dau-data 전용 이력서 payload snapshot.
 *
 * 생성 시점의 기본 payload를 복사해 두므로 루트(/sr_k)와 독립적으로 수정할 수 있습니다.
 */
export { default as metaPayload } from "./meta";
export { default as profilePayload } from "./profile";
export { default as introducePayload } from "./introduce";
export { default as skillPayload } from "./skill";
export { default as workExperiencePayload } from "./work-experience";
export { default as otherExperiencePayload } from "./other-experience";
export { default as educationPayload } from "./education";
export { default as etcPayload } from "./etc";
