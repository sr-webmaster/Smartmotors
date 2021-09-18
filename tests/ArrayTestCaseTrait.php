<?php

namespace Tests;

/**
 * Trait ArrayTestCaseTrait
 * @cite https://gist.github.com/pokap/ac5fce3570c9bec3a87a8908bcbd0bbc
 * @author https://gist.github.com/pokap
 */
trait ArrayTestCaseTrait
{
    /**
     * Asserts that two associative arrays are similar.
     *
     * Both arrays must have the same indexes with identical values
     * without respect to key ordering
     *
     * @param array $expected
     * @param array $array
     */
    protected function assertArraySimilar(array $expected, array $array)
    {
        $key_difference = array_diff_key($array, $expected);
        $this->assertTrue(
            count($key_difference) === 0,
            'Arrays do not have similar count with a different key(s) being "' . implode($key_difference) . '"'
        );
        foreach ($expected as $key => $value) {
            if (is_array($value)) {
                $this->assertArraySimilar($value, $array[$key]);
            } else {
                $this->assertContains($value, $array);
            }
        }
    }
}
