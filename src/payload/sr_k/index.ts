/**
 * sr_k (기본 이력서) payload 모음
 *
 * 각 섹션별 payload를 한 곳에서 일괄 export합니다.
 * page.tsx 에서 이 파일만 import하면 됩니다.
 */

export { default as metaPayload } from "../meta";
export { default as profilePayload } from "../profile";
export { default as introducePayload } from "../introduce";
export { default as skillPayload } from "../skill";
export { default as workExperiencePayload } from "../work-experience";
export { default as otherExperiencePayload } from "../other-experience";
export { default as educationPayload } from "../education";
export { default as etcPayload } from "../etc";
