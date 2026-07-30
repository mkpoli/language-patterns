import type { Strategy } from '$lib/types';
import { getLocale } from '$lib/paraglide/runtime';

/** A term the interface shows, in each language the site speaks. */
export interface Localized {
	en: string;
	ja: string;
	zh: string;
}

/** Reads the term in the reader's language. Call it while rendering: the
 * language switcher reloads the page, so the locale is fixed per render. */
export function localized(value: Localized): string {
	return value[getLocale()] ?? value.en;
}

/**
 * Tags sit in three facets, each answering one question about an entry. An
 * entry carries tags from several facets at once.
 */
export type TagFacetId = 'domain' | 'structure' | 'mechanism';

export interface TagFacet {
	id: TagFacetId;
	label: Localized;
	description: Localized;
	color: Strategy['color'];
}

export interface Tag {
	id: string;
	label: Localized;
	facet: TagFacetId;
	definition: Localized;
}

export const facets: TagFacet[] = [
	{
		id: 'domain',
		label: {
			en: 'Domain',
			ja: '意味領域',
			zh: '语义领域'
		},
		description: {
			en: 'The area of meaning at issue.',
			ja: '扱う意味の範囲。',
			zh: '条目所涉及的意义范围。'
		},
		color: 'emerald'
	},
	{
		id: 'structure',
		label: {
			en: 'Structure',
			ja: '形式',
			zh: '形式结构'
		},
		description: {
			en: 'The formal machinery a language uses to carry it.',
			ja: 'それを担う言語形式のしくみ。',
			zh: '承载它的语言形式手段。'
		},
		color: 'sky'
	},
	{
		id: 'mechanism',
		label: {
			en: 'Mechanism',
			ja: 'メカニズム',
			zh: '机制'
		},
		description: {
			en: 'The process that produced the form or drives its change.',
			ja: 'その形式を生んだ、あるいは変化を進める過程。',
			zh: '产生该形式或推动其演变的过程。'
		},
		color: 'violet'
	}
];

const tagList = [
	// domain
	{
		id: 'existence',
		label: {
			en: 'Existence',
			ja: '存在',
			zh: '存在'
		},
		facet: 'domain',
		definition: {
			en: 'An assertion that something is present in the world or in some setting.',
			ja: 'あるものが世界や場面のなかに在ると述べること。',
			zh: '陈述某物存在于世界或某个场景之中。'
		}
	},
	{
		id: 'location',
		label: {
			en: 'Location',
			ja: '位置',
			zh: '位置'
		},
		facet: 'domain',
		definition: {
			en: 'Where something is, relative to a place or to another thing.',
			ja: 'あるものが、場所や他のものに対してどこにあるか。',
			zh: '某物相对于某地或另一事物所处的位置。'
		}
	},
	{
		id: 'possession',
		label: {
			en: 'Possession',
			ja: '所有',
			zh: '所有'
		},
		facet: 'domain',
		definition: {
			en: 'A relation between a possessor and a possessed thing, covering ownership, kinship and body parts.',
			ja: '所有者と所有物の関係。所有物・親族・身体部位を含む。',
			zh: '领有者与所属物之间的关系，涵盖所有权、亲属与身体部位。'
		}
	},
	{
		id: 'negation',
		label: {
			en: 'Negation',
			ja: '否定',
			zh: '否定'
		},
		facet: 'domain',
		definition: {
			en: 'Denial that something holds, together with the elements that mark it.',
			ja: '何かが成り立たないと述べること、およびそれを標示する要素。',
			zh: '否认某事成立，以及标示这一否认的成分。'
		}
	},
	{
		id: 'indefiniteness',
		label: {
			en: 'Indefiniteness',
			ja: '不定',
			zh: '不定'
		},
		facet: 'domain',
		definition: {
			en: 'Reference to an entity the hearer is not expected to pick out.',
			ja: '聞き手が特定できるとは想定されていない対象への指示。',
			zh: '指称听话人并不被预期能够辨识的对象。'
		}
	},
	{
		id: 'quantification',
		label: {
			en: 'Quantification',
			ja: '数量',
			zh: '量化'
		},
		facet: 'domain',
		definition: {
			en: 'How much or how many: every, some, none, both.',
			ja: 'どれだけ、いくつ。すべて・いくつか・ゼロ・両方。',
			zh: '多少与几何：全部、部分、无、两者。'
		}
	},
	{
		id: 'perception',
		label: {
			en: 'Perception',
			ja: '知覚',
			zh: '感知'
		},
		facet: 'domain',
		definition: {
			en: 'Seeing, hearing, and the other senses.',
			ja: '見る、聞く、その他の感覚。',
			zh: '视觉、听觉以及其他感官。'
		}
	},
	{
		id: 'obligation',
		label: {
			en: 'Obligation',
			ja: '義務',
			zh: '义务'
		},
		facet: 'domain',
		definition: {
			en: 'Being bound to act — orders, compliance, duty.',
			ja: '行為を求められること。命令、服従、義務。',
			zh: '受约束而行动：命令、服从、义务。'
		}
	},
	{
		id: 'modality',
		label: {
			en: 'Modality',
			ja: 'モダリティ',
			zh: '情态'
		},
		facet: 'domain',
		definition: {
			en: 'Possibility, necessity, or attempt, short of asserting that the event came off.',
			ja: '可能・必要・試み。出来事が成立したとまでは述べない。',
			zh: '可能、必然或尝试，并不断言事件已然实现。'
		}
	},
	{
		id: 'device-operation',
		label: {
			en: 'Device operation',
			ja: '機器の操作',
			zh: '设备操作'
		},
		facet: 'domain',
		definition: {
			en: 'Making a machine start or stop working.',
			ja: '機械を動かす、あるいは止めること。',
			zh: '让机器开始或停止运转。'
		}
	},
	{
		id: 'grammatical-relations',
		label: {
			en: 'Grammatical relations',
			ja: '文法関係',
			zh: '语法关系'
		},
		facet: 'domain',
		definition: {
			en: 'Subject, object, and the other roles a clause assigns its participants.',
			ja: '主語・目的語など、節が参与者に与える役割。',
			zh: '主语、宾语以及小句赋予参与者的其他角色。'
		}
	},
	{
		id: 'benefaction',
		label: {
			en: 'Benefaction',
			ja: '受益',
			zh: '受益'
		},
		facet: 'domain',
		definition: {
			en: 'An action done for someone’s sake, or at their expense.',
			ja: '誰かのために行われる行為、また誰かが不利益をこうむる行為。',
			zh: '为某人而做的行为，或使某人蒙受损失的行为。'
		}
	},
	{
		id: 'spatial-relation',
		label: {
			en: 'Spatial relation',
			ja: '空間関係',
			zh: '空间关系'
		},
		facet: 'domain',
		definition: {
			en: 'Relations like in, on, under, behind.',
			ja: '〜の中、〜の上、〜の下、〜の後ろといった関係。',
			zh: '如在里面、在上面、在下面、在后面这类关系。'
		}
	},

	// structure
	{
		id: 'word-order',
		label: {
			en: 'Word order',
			ja: '語順',
			zh: '语序'
		},
		facet: 'structure',
		definition: {
			en: 'The sequence of subject, object, verb and their dependents.',
			ja: '主語・目的語・動詞とその従属要素が並ぶ順序。',
			zh: '主语、宾语、动词及其从属成分的排列顺序。'
		}
	},
	{
		id: 'adposition',
		label: {
			en: 'Adposition',
			ja: '接置詞',
			zh: '附置词'
		},
		facet: 'structure',
		definition: {
			en: 'Prepositions, postpositions and circumpositions marking the role of a noun phrase.',
			ja: '名詞句の役割を標示する前置詞・後置詞・両置詞。',
			zh: '标示名词短语角色的前置词、后置词与框式介词。'
		}
	},
	{
		id: 'syncretism',
		label: {
			en: 'Syncretism',
			ja: '同形性',
			zh: '同形现象'
		},
		facet: 'structure',
		definition: {
			en: 'One form doing duty across several grammatical functions.',
			ja: '一つの形式が複数の文法機能を兼ねること。',
			zh: '同一形式兼任多种语法功能。'
		}
	},
	{
		id: 'colexification',
		label: {
			en: 'Colexification',
			ja: '共語彙化',
			zh: '共词化'
		},
		facet: 'structure',
		definition: {
			en: 'One lexeme covering meanings that other languages keep apart.',
			ja: '他の言語では別語になる意味を、一つの語がまとめて担うこと。',
			zh: '同一词项涵盖其他语言分开表达的意义。'
		}
	},
	{
		id: 'expletive-subject',
		label: {
			en: 'Expletive subject',
			ja: '虚辞主語',
			zh: '虚位主语'
		},
		facet: 'structure',
		definition: {
			en: 'A contentless element holding the subject slot: English there, French il.',
			ja: '意味を持たずに主語の位置を埋める要素。英語のthere、フランス語のil。',
			zh: '不表实义、占据主语位置的成分，如英语there、法语il。'
		}
	},
	{
		id: 'suppletion',
		label: {
			en: 'Suppletion',
			ja: '補充法',
			zh: '异根互补'
		},
		facet: 'structure',
		definition: {
			en: 'Cells of one paradigm filled by unrelated stems, as in Turkish var and yok.',
			ja: '一つのパラダイムの枠が、語源の異なる語幹で埋まること。トルコ語のvarとyok。',
			zh: '同一聚合体的格位由无同源关系的词干填充，如土耳其语的var与yok。'
		}
	},
	{
		id: 'negative-concord',
		label: {
			en: 'Negative concord',
			ja: '否定一致',
			zh: '否定一致'
		},
		facet: 'structure',
		definition: {
			en: 'Several negative-marked elements in a clause expressing a single negation.',
			ja: '一つの節に否定標示が複数現れて、否定は一度だけ表されること。',
			zh: '小句中多个带否定标记的成分只表达一次否定。'
		}
	},
	{
		id: 'oblique-marking',
		label: {
			en: 'Oblique marking',
			ja: '斜格標示',
			zh: '斜格标记'
		},
		facet: 'structure',
		definition: {
			en: 'A participant marked by a case or adposition rather than as subject or object.',
			ja: '参与者が主語・目的語ではなく、格や接置詞で標示されること。',
			zh: '参与者不以主宾语形式出现，而由格或附置词标示。'
		}
	},
	{
		id: 'topic-marking',
		label: {
			en: 'Topic marking',
			ja: '主題標示',
			zh: '话题标记'
		},
		facet: 'structure',
		definition: {
			en: 'An element flagged as what the sentence is about.',
			ja: '文が何について述べているかを示す標示。',
			zh: '标示句子所谈论的对象。'
		}
	},
	{
		id: 'multiverb-construction',
		label: {
			en: 'Multiverb construction',
			ja: '多動詞構文',
			zh: '多动词结构'
		},
		facet: 'structure',
		definition: {
			en: 'Two or more verbs in one clause describing a single event: converbs, serial verbs, auxiliary chains.',
			ja: '一つの節に複数の動詞が並び、一つの出来事を述べる構文。副動詞、連続動詞、補助動詞の連鎖。',
			zh: '一个小句中两个及以上动词描述同一事件：副动词、连动、助动词链。'
		}
	},
	{
		id: 'valency-change',
		label: {
			en: 'Valency change',
			ja: '項の増減',
			zh: '配价变化'
		},
		facet: 'structure',
		definition: {
			en: 'Marking on the verb that adds a participant, or shifts which one the clause is built around.',
			ja: '参与者を増やす、あるいは節がどの参与者を中心に組み立てられるかを変える動詞標示。',
			zh: '动词上的标记，增加参与者或改变小句以哪个参与者为中心。'
		}
	},
	{
		id: 'auxiliary-verb',
		label: {
			en: 'Auxiliary verb',
			ja: '助動詞',
			zh: '助动词'
		},
		facet: 'structure',
		definition: {
			en: 'A verb carrying tense, aspect or modality for a main verb.',
			ja: '本動詞に代わってテンス・アスペクト・モダリティを担う動詞。',
			zh: '为主要动词承担时、体或情态的动词。'
		}
	},

	// mechanism
	{
		id: 'metaphor',
		label: {
			en: 'Metaphor',
			ja: '隠喩',
			zh: '隐喻'
		},
		facet: 'mechanism',
		definition: {
			en: 'One domain lending its vocabulary to another: fire for electric light.',
			ja: 'ある領域の語彙が別の領域に転用されること。火の語で電灯をつける。',
			zh: '一个领域的词汇被借用到另一领域，例如以火表示点亮电灯。'
		}
	},
	{
		id: 'metonymy',
		label: {
			en: 'Metonymy',
			ja: '換喩',
			zh: '转喻'
		},
		facet: 'mechanism',
		definition: {
			en: 'A shift along contiguity, where a part, cause or outcome names the whole.',
			ja: '隣接関係にもとづく転義。部分・原因・結果が全体を指す。',
			zh: '基于邻接关系的转义，以部分、原因或结果指称整体。'
		}
	},
	{
		id: 'grammaticalization',
		label: {
			en: 'Grammaticalization',
			ja: '文法化',
			zh: '语法化'
		},
		facet: 'mechanism',
		definition: {
			en: 'A lexical item hardening into a grammatical marker.',
			ja: '語彙的な語が文法標識へ固まっていくこと。',
			zh: '词汇成分固化为语法标记。'
		}
	},
	{
		id: 'reanalysis',
		label: {
			en: 'Reanalysis',
			ja: '再分析',
			zh: '重新分析'
		},
		facet: 'mechanism',
		definition: {
			en: 'The same string parsed with a new structure by later speakers.',
			ja: '同じ連続が、後の話者に別の構造として解釈されること。',
			zh: '同一串形式被后来的说话人分析出新的结构。'
		}
	},
	{
		id: 'semantic-bleaching',
		label: {
			en: 'Semantic bleaching',
			ja: '意味の希薄化',
			zh: '语义漂白'
		},
		facet: 'mechanism',
		definition: {
			en: 'Loss of specific content as a form spreads to more contexts.',
			ja: '形式が使われる文脈を広げるにつれ、具体的な意味を失うこと。',
			zh: '形式扩展到更多语境时失去具体意义。'
		}
	},
	{
		id: 'renewal-cycle',
		label: {
			en: 'Renewal cycle',
			ja: '更新の循環',
			zh: '更新循环'
		},
		facet: 'mechanism',
		definition: {
			en: 'A weakened form gets reinforced, the reinforcement takes over, and the sequence starts again.',
			ja: '弱まった形式が補強され、補強した要素が主役になり、また同じ道をたどること。',
			zh: '弱化的形式得到加强，加强成分取而代之，循环再度开始。'
		}
	},
	{
		id: 'lexicalization',
		label: {
			en: 'Lexicalization',
			ja: '語彙化',
			zh: '词汇化'
		},
		facet: 'mechanism',
		definition: {
			en: 'A phrase or paradigm cell frozen into a single stored word.',
			ja: '句やパラダイムの一枠が、一語として固定すること。',
			zh: '短语或聚合体中的某一格位凝固为一个词。'
		}
	}
] as const satisfies readonly Tag[];

export type TagId = (typeof tagList)[number]['id'];

export const tags: readonly Tag[] = tagList;

const tagById = new Map(tagList.map((t) => [t.id as TagId, t as Tag]));

export function getTag(id: TagId): Tag {
	const tag = tagById.get(id);
	if (!tag) throw new Error(`Unknown tag: ${id}`);
	return tag;
}

const facetById = new Map(facets.map((f) => [f.id, f]));

export function getFacet(id: TagFacetId): TagFacet {
	return facetById.get(id)!;
}

const facetOrder = new Map(facets.map((f, i) => [f.id, i]));
const vocabularyOrder = new Map(tagList.map((t, i) => [t.id as TagId, i]));

/** Tags in facet order, then in vocabulary order within a facet. */
export function sortTags(ids: readonly TagId[]): Tag[] {
	return ids
		.map(getTag)
		.sort(
			(a, b) =>
				facetOrder.get(a.facet)! - facetOrder.get(b.facet)! ||
				vocabularyOrder.get(a.id as TagId)! - vocabularyOrder.get(b.id as TagId)!
		);
}

/** Tags of one entry, grouped into the facets that entry actually uses. */
export function groupByFacet(ids: readonly TagId[]): { facet: TagFacet; tags: Tag[] }[] {
	const sorted = sortTags(ids);
	return facets
		.map((facet) => ({ facet, tags: sorted.filter((t) => t.facet === facet.id) }))
		.filter((g) => g.tags.length > 0);
}
