<?php

namespace MetaFox\Importer\Supports;

class Emoji
{
    public static function getCommentEmoji(): array
    {
        return [
            '(waving)'         => '\uD83D\uDC4B',
            '(OK)'             => '\uD83D\uDC4C',
            '(y)'              => '\uD83D\uDC4D',
            '(n)'              => '\uD83D\uDC4E',
            '(clap)'           => '\uD83D\uDC4F',
            '(smiling)'        => '\uD83D\uDE0A',
            '(savoring)'       => '\uD83D\uDE0B',
            '(relieved)'       => '\uD83D\uDE0C',
            '(hearteyes)'      => '\uD83D\uDE0D',
            '(cool)'           => '\uD83D\uDE0E',
            '(smirking)'       => '\uD83D\uDE0F',
            '(kiss)'           => '\uD83D\uDE1A',
            ':P'               => '\uD83D\uDE0B',
            '(disappointed)'   => '\uD83D\uDE1E',
            ':S'               => '\uD83D\uDE1F',
            '(sleepy)'         => '\uD83D\uDE2A',
            '(cryingface)'     => '\uD83D\uDE22',
            ';('               => '\uD83D\uDE2D',
            ':O'               => '\uD83D\uDE32',
            '(handshake)'      => '\uD83E\uDD1D',
            '(rockon)'         => '\uD83E\uDD1F',
            '(zany)'           => '\uD83D\uDE1C',
            '(shush)'          => '\uD83E\uDD2B',
            '(chuckle)'        => '\uD83E\uDD2D',
            '(puke)'           => '\uD83E\uDD2E',
            '(brokenheart)'    => '\uD83D\uDC94',
            ':D'               => '\uD83D\uDE00',
            '(beaming)'        => '\uD83D\uDE01',
            '(tearofjoys)'     => '\uD83D\uDE02',
            '(smilingeyes)'    => '\uD83D\uDE04',
            '(sweat)'          => '\uD83D\uDE05',
            '(squint)'         => '\uD83D\uDE06',
            '(angel)'          => '\uD83D\uDE07',
            '(devil)'          => '\uD83D\uDE08',
            ';)'               => '\uD83D\uDE09',
            ':|'               => '\uD83D\uDE10',
            '(expressionless)' => '\uD83D\uDE11',
            '(unamused)'       => '\uD83D\uDE12',
            '(downcast)'       => '\uD83D\uDE13',
            ':('               => '\uD83D\uDE41',
            ':-/'              => '\uD83D\uDE15',
            '(confounded)'     => '\uD83D\uDE16',
            '(kissingface)'    => '\uD83D\uDE17',
            ':-*'              => '\uD83D\uDE18',
            '(angry)'          => '\uD83D\uDE20',
            '(pouting)'        => '\uD83D\uDE21',
            '(persevering)'    => '\uD83D\uDE23',
            '(steamnose)'      => '\uD83D\uDE24',
            '(anguished)'      => '\uD83D\uDE27',
            '(fearful)'        => '\uD83D\uDE28',
            '(weary)'          => '\uD83D\uDE29',
            '(anxious)'        => '\uD83D\uDE30',
            '(scream)'         => '\uD83D\uDE31',
            '(sleep)'          => '\uD83D\uDE34',
            '(dizzy)'          => '\uD83D\uDE35',
            '(emptymouth)'     => '\uD83D\uDE36',
            '(medicalmask)'    => '\uD83D\uDE37',
            '(frown)'          => '\uD83D\uDE26',
            ':)'               => '\uD83D\uDE42',
            '(upsidedown)'     => '\uD83D\uDE43',
            '(rollingeyes)'    => '\uD83D\uDE44',
            '(zipper)'         => '\uD83E\uDD10',
            '(moneymouth)'     => '\uD83E\uDD11',
            '(sick)'           => '\uD83E\uDD12',
            '(nerd)'           => '\uD83E\uDD13',
            '(think)'          => '\uD83E\uDD14',
            '(injure)'         => '\uD83E\uDD15',
            '(hug)'            => '\uD83E\uDD17',
            '(nauseated)'      => '\uD83E\uDD22',
            '(drooling)'       => '\uD83E\uDD24',
            '(lie)'            => '\uD83E\uDD25',
            '(sneeze)'         => '\uD83E\uDD27',
            '(starstruck)'     => '\uD83E\uDD29',
            '(star)'           => '\uD83C\uDF1F',
            '(victory)'        => '\u270C',
            '(heart)'          => '\u2764',
        ];
    }

    public static function getMessageEmoji(): array
    {
        return [
            ':smile:'                        => '\uD83D\uDE0A',
            ':laughing:'                     => '\uD83D\uDE02',
            ':blush:'                        => '\uD83D\uDE0A',
            ':smiley:'                       => '\uD83D\uDE00',
            ':relaxed:'                      => '\uD83D\uDE0A',
            ':smirk:'                        => '\uD83D\uDE0F',
            ':heart_eyes:'                   => '\uD83D\uDE0D',
            ':kissing_heart:'                => '\uD83D\uDE18',
            ':kissing_closed_eyes:'          => '\uD83D\uDE1A',
            ':flushed:'                      => '\uD83D\uDE33',
            ':relieved:'                     => '\uD83D\uDE0C',
            ':satisfied:'                    => '\uD83D\uDE0C',
            ':grin:'                         => '\uD83D\uDE01',
            ':wink:'                         => '\uD83D\uDE09',
            ':stuck_out_tongue_winking_eye:' => '\uD83D\uDE1C',
            ':stuck_out_tongue_closed_eyes:' => '\uD83D\uDE1D',
            ':grinning:'                     => '\uD83D\uDE00',
            ':kissing:'                      => '\uD83D\uDE1A',
            ':kissing_smiling_eyes:'         => '\uD83D\uDE19',
            ':stuck_out_tongue:'             => '\uD83D\uDE0B',
            ':sleeping:'                     => '\uD83D\uDE34',
            ':worried:'                      => '\uD83D\uDE1F',
            ':frowning:'                     => '\uD83D\uDE41',
            ':anguished:'                    => '\uD83D\uDE27',
            ':open_mouth:'                   => '\uD83D\uDE2E',
            ':grimacing:'                    => '\uD83D\uDE2C',
            ':confused:'                     => '\uD83D\uDE15',
            ':hushed:'                       => '\uD83D\uDE2F',
            ':expressionless:'               => '\uD83D\uDE11',
            ':unamused:'                     => '\uD83D\uDE12',
            ':sweat_smile:'                  => '\uD83D\uDE05',
            ':sweat:'                        => '\uD83D\uDE05',
            ':weary:'                        => '\uD83D\uDE29',
            ':pensive:'                      => '\uD83D\uDE14',
            ':disappointed:'                 => '\uD83D\uDE1E',
            ':confounded:'                   => '\uD83D\uDE16',
            ':fearful:'                      => '\uD83D\uDE28',
            ':cold_sweat:'                   => '\uD83D\uDE30',
            ':persevere:'                    => '\uD83D\uDE23',
            ':cry:'                          => '\uD83D\uDE22',
            ':sob:'                          => '\uD83D\uDE2D',
            ':joy:'                          => '\uD83D\uDE02',
            ':astonished:'                   => '\uD83D\uDE32',
            ':scream:'                       => '\uD83D\uDE31',
            ':tired_face:'                   => '\uD83D\uDE2B',
            ':angry:'                        => '\uD83D\uDE20',
            ':rage:'                         => '\uD83D\uDE21',
            ':triumph:'                      => '\uD83D\uDE24',
            ':sleepy:'                       => '\uD83D\uDE2A',
            ':yum:'                          => '\uD83D\uDE0B',
            ':mask:'                         => '\uD83D\uDE37',
            ':sunglasses:'                   => '\uD83D\uDE0E',
            ':dizzy_face:'                   => '\uD83D\uDE35',
            ':imp:'                          => '\uD83D\uDC7F',
            ':smiling_imp:'                  => '\uD83D\uDE08',
            ':neutral_face:'                 => '\uD83D\uDE10',
            ':no_mouth:'                     => '\uD83D\uDE36',
            ':innocent:'                     => '\uD83D\uDE07',
            ':alien:'                        => '\uD83D\uDC7D',
            ':yellow_heart:'                 => '\uD83D\uDC9B',
            ':blue_heart:'                   => '\uD83D\uDC99',
            ':purple_heart:'                 => '\uD83D\uDC9C',
            ':heart:'                        => '\u2764',
            ':green_heart:'                  => '\uD83D\uDC9A',
            ':broken_heart:'                 => '\uD83D\uDC94',
            ':heartbeat:'                    => '\uD83D\uDC93',
            ':heartpulse:'                   => '\uD83D\uDC97',
            ':two_hearts:'                   => '\uD83D\uDC95',
            ':revolving_hearts:'             => '\uD83D\uDC9E',
            ':cupid:'                        => '\uD83D\uDC98',
            ':sparkling_heart:'              => '\uD83D\uDC96',
            ':sparkles:'                     => '\u2728',
            ':star:'                         => '\uD83C\uDF1F',
            ':star2:'                        => '\uD83C\uDF1F',
            ':dizzy:'                        => '\uD83D\uDCAB',
            ':boom:'                         => '\uD83D\uDCA5',
            ':anger:'                        => '\uD83D\uDCA2',
            ':exclamation:'                  => '\u2757',
            ':question:'                     => '\uFF1F',
            ':grey_exclamation:'             => '\u2755',
            ':grey_question:'                => '\u2754',
            ':zzz:'                          => '\uD83D\uDCA4',
            ':dash:'                         => '\uD83D\uDCA8',
            ':sweat_drops:'                  => '\uD83D\uDCA6',
            ':notes:'                        => '\uD83C\uDFB6',
            ':musical_note:'                 => '\uD83C\uDFB5',
            ':fire:'                         => '\uD83D\uDD25',
            ':poop:'                         => '\uD83D\uDCA9',
            ':thumbsup:'                     => '\uD83D\uDC4D',
            ':thumbsdown:'                   => '\uD83D\uDC4E',
            ':ok_hand:'                      => '\uD83D\uDC4C',
            ':punch:'                        => '\uD83D\uDC4A',
            ':fist:'                         => '\u270A',
            ':v:'                            => '\u270C',
            ':wave:'                         => '\uD83D\uDC4B',
            ':hand:'                         => '\u270B',
            ':raised_hand:'                  => '\uD83D\uDE4B',
            ':open_hands:'                   => '\uD83D\uDC50',
            ':point_up:'                     => '\u261D',
            ':point_down:'                   => '\uD83D\uDC47',
            ':point_left:'                   => '\uD83D\uDC48',
            ':point_right:'                  => '\uD83D\uDC49',
            ':raised_hands:'                 => '\uD83D\uDE4C',
            ':pray:'                         => '\uD83D\uDE4F',
            ':point_up_2:'                   => '\uD83D\uDC46',
            ':clap:'                         => '\uD83D\uDC4F',
            ':muscle:'                       => '\uD83D\uDCAA',
            ':runner:'                       => '\uD83C\uDFC3',
            ':couple:'                       => '\uD83D\uDC6B',
            ':family:'                       => '\uD83D\uDC6A',
            ':two_men_holding_hands:'        => '\uD83D\uDC6C',
            ':two_women_holding_hands:'      => '\uD83D\uDC6D',
            ':dancer:'                       => '\uD83D\uDC83',
            ':dancers:'                      => '\uD83D\uDC6F',
            ':ok_woman:'                     => '\uD83D\uDE46',
            ':no_good:'                      => '\uD83D\uDE45',
            ':information_desk_person:'      => '\uD83D\uDC81',
            ':bride_with_veil:'              => '\uD83D\uDC70',
            ':person_with_pouting_face:'     => '\uD83D\uDE4E',
            ':person_frowning:'              => '\uD83D\uDE4D',
            ':bow:'                          => '\uD83D\uDE47',
            ':couplekiss:'                   => '\uD83D\uDC8F',
            ':couple_with_heart:'            => '\uD83D\uDC91',
            ':massage:'                      => '\uD83D\uDC86',
            ':haircut:'                      => '\uD83D\uDC87',
            ':nail_care:'                    => '\uD83D\uDC85',
            ':boy:'                          => '\uD83D\uDC66',
            ':girl:'                         => '\uD83D\uDC67',
            ':woman:'                        => '\uD83D\uDC69',
            ':man:'                          => '\uD83D\uDC68',
            ':baby:'                         => '\uD83D\uDC76',
            ':older_woman:'                  => '\uD83D\uDC75',
            ':older_man:'                    => '\uD83D\uDC74',
            ':person_with_blond_hair:'       => '\uD83D\uDC71',
            ':man_with_gua_pi_mao:'          => '\uD83D\uDC72',
            ':man_with_turban:'              => '\uD83D\uDC73',
            ':construction_worker:'          => '\uD83D\uDC77',
            ':cop:'                          => '\uD83D\uDC6E',
            ':angel:'                        => '\uD83D\uDC7C',
            ':princess:'                     => '\uD83D\uDC78',
            ':smiley_cat:'                   => '\uD83D\uDE3A',
            ':smile_cat:'                    => '\uD83D\uDE38',
            ':heart_eyes_cat:'               => '\uD83D\uDE3B',
            ':kissing_cat:'                  => '\uD83D\uDE3D',
            ':smirk_cat:'                    => '\uD83D\uDE3C',
            ':scream_cat:'                   => '\uD83D\uDE40',
            ':crying_cat_face:'              => '\uD83D\uDE3F',
            ':joy_cat:'                      => '\uD83D\uDE39',
            ':pouting_cat:'                  => '\uD83D\uDE3E',
            ':japanese_ogre:'                => '\uD83D\uDC79',
            ':japanese_goblin:'              => '\uD83D\uDC7A',
            ':see_no_evil:'                  => '\uD83D\uDE48',
            ':hear_no_evil:'                 => '\uD83D\uDE49',
            ':speak_no_evil:'                => '\uD83D\uDE4A',
            ':guardsman:'                    => '\uD83D\uDC82',
            ':skull:'                        => '\uD83D\uDC80',
            ':feet:'                         => '\uD83D\uDC3E',
            ':lips:'                         => '\uD83D\uDC44',
            ':kiss:'                         => '\uD83D\uDC8B',
            ':droplet:'                      => '\uD83D\uDCA7',
            ':ear:'                          => '\uD83D\uDC42',
            ':eyes:'                         => '\uD83D\uDC40',
            ':nose:'                         => '\uD83D\uDC43',
            ':tongue:'                       => '\uD83D\uDC45',
            ':love_letter:'                  => '\uD83D\uDC8C',
            ':bust_in_silhouette:'           => '\uD83D\uDC64',
            ':busts_in_silhouette:'          => '\uD83D\uDC65',
            ':speech_balloon:'               => '\uD83D\uDCAC',
            ':thought_balloon::'             => '\uD83D\uDCAD',
        ];
    }

    public static function getAllEmoji(): array
    {
        return array_merge(self::getCommentEmoji(), self::getMessageEmoji());
    }
}