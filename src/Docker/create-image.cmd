docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss6/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss6/app ../..
