<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Foundation\Testing\TestResponse;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate');
    }

    protected function assertExceptionResponse($response)
    {
        $message = is_a($response->exception, \Exception::class) ? $response->exception->getMessage() : '';
        $this->assertNotEmpty($response->exception, $message);
    }

    protected function assertNotExceptionResponse($response)
    {
        $message = is_a($response->exception, \Exception::class) ? $response->exception->getMessage() : '';
        $this->assertEmpty($response->exception, $message);
    }

    /**
     * Dump the response in case the response status code does not match the one specified as parameter (200 as default)
     * @param TestResponse $response
     * @param int $status
     * @return TestResponse
     */
    protected function assertSuccess(TestResponse $response, $status = 200)
    {
        if ($response->status() != $status) {
            dump($response);
        }
        return $response->assertStatus($status);
    }
}
