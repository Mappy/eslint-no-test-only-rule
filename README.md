# eslint-plugin-test-no-only

This eslint plugin add rules to detect `test.only` or `describe.only` used in jest.

It is useful as a pre-commit or pre-push rules to avoid committing or pushing it.

## Configuration

```
{
    "plugins": [ "test-no-only" ],
    "rules": {
        "test-no-only/test-no-only": 2,
        "test-no-only/describe-no-only": 2
    }
}
```
