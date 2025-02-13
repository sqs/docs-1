---
title: 'PlanetScale plans'
subtitle: 'Learn about the different products and plans we offer: Scaler Pro and Enterprise'
date: '2024-03-06'
---

## Overview

PlanetScale is built to accomodate all companies at all stages. Whether you need a hassle-free managed database for your side project or you’re running millions of queries per second at the scale of YouTube, we have a solution for you.

Our plans are split into two general offerings: [Scaler Pro (self-serve)](#scaler-pro) and [Enterprise](#planetscale-enterprise-plan).

{% callout %}
We previously offered a free tier plan &mdash; [Hobby](/docs/concepts/hobby-plan). The Hobby plan will be deprecated on April 8th, 2024, and you are no longer able to create new Hobby databases as of March 6th, 2024.

Any Hobby databases that have not been migrated by April 8th, 2024 will be slept. Read the [Hobby plan deprecation FAQ documentation](/docs/concepts/hobby-plan-deprecation-faq) more information about next steps.
{% /callout %}

## Scaler Pro

The **Scaler Pro** plan is broken down by cluster size, which have varying levels of compute power depending on the needs of your database. As your application scales, upgrading or downgrading your **Scaler Pro** cluster is a seamless operation that does not involve any downtime.

|            | **Processor** | **Memory** |
| ---------- | ------------- | ---------- |
| **PS-10**  | 1/8 vCPU      | 1 GB RAM   |
| **PS-20**  | 1/4 vCPU      | 2 GB RAM   |
| **PS-40**  | 1/2 vCPU      | 4 GB RAM   |
| **PS-80**  | 1 vCPU        | 8 GB RAM   |
| **PS-160** | 2 vCPU        | 16 GB RAM  |
| **PS-320** | 4 vCPU        | 32 GB RAM  |
| **PS-400** | 8 vCPU        | 32 GB RAM  |

{% callout %}
We have Scaler Pro cluster sizes available up to 64 vCPU and 128 GB RAM. Please [contact us](/contact) to unlock sizes larger than PS-400 in your account.
{% /callout %}

On top of processing and memory, all **Scaler Pro** cluster sizes share the following capacities.

|                                                                              | **Scaler Pro**                    |
| ---------------------------------------------------------------------------- | --------------------------------- |
| **Storage/month**                                                            | 10 GB\*                           |
| **Row reads/month**                                                          | _Unmetered_                       |
| **Row writes/month**                                                         | _Unmetered_                       |
| **Available cluster sizes**                                                  | 7                                 |
| **Availability zones**                                                       | 3                                 |
| **Production branches**                                                      | 1 included\*\*                    |
| **Development branches**                                                     | 1,440 hours included              |
| **Concurrent Connections**                                                   | 10,000                            |
| **Query Insights retention**                                                 | 7 days                            |
| **Horizontal sharding**                                                      | Not included                      |
| [**Deployment options**](/docs/concepts/deployment-options)                  | Multi-tenant                      |
| **Read only regions**                                                        | Available as an add-on            |
| **Web console**                                                              | Included                          |
| **PlanetScale CLI**                                                          | Included                          |
| **SSO**                                                                      | Available as an add-on\*\*\*      |
| **Audit log retention**                                                      | 15 days                           |
| **Automatic backups**                                                        | Every 12 hours                    |
| **Support**                                                                  | Standard, upgrade available\*\*\* |
| [**Data Branching®**](/docs/concepts/data-branching)                        | Included                          |
| [**PlanetScale Boost**](/docs/concepts/query-caching-with-planetscale-boost) | Available as an add-on            |

\* For the Scaler Pro plan, any storage over the included amount is billed at $1.50 per additional 1 GB.
\*\* Additional production branches are billed at the cost of your selected cluster size per month.
\*\*\* SSO and [Business support](/docs/support/support-overview#business) options are available on the Scaler Pro plan for an additional fee.

#### Additional production branches

Each production branch in the Scaler Pro plan provisions a separate, production database cluster in our infrastructure. Upon adding an additional production branch, you will be prompted to select the cluster size for the new branch. As an example, the following table lists the cost of each available cluster in the AWS us-east-1 region at the time of this writing:

| **Cluster size** | **Cost** |
| ---------------- | -------- |
| PS-10            | $39.00   |
| PS-20            | $59.00   |
| PS-40            | $99.00   |
| PS-80            | $179.00  |
| PS-160           | $349.00  |
| PS-320           | $699.00  |
| PS-400           | $999.00  |

If you had a `main` production branch using the **PS-40** cluster size and two addition production branches using the **PS-20** cluster size, the total cost for the database would be **$217.00** per month.

| **Production branch cluster** | **Cost per unit** | **Quantity** | **Total per month** |
| ----------------------------- | ----------------- | ------------ | ------------------- |
| PS-40                         | $99.00            | 1            | $99.00              |
| PS-20                         | $59.00            | 2            | $118.00             |
| **Grand total**               |                   |              | **$217.00**         |

#### Development branches

Scaler Pro development branches are billed only for the time that they are used to the nearest second. Each month, Scaler Pro databases include
`hours_in_current_month * 2` of development branch time for free (1,440 hours for a 30 day month). Any time used over the included is billed at a rate of ~$0.014 per hour (`$10 / hours_in_current_month`). All branches are only billed for the time that they are used, prorated to the second.

If a Scaler Pro database is created in the middle of a billing cycle, the included development branch hours are prorated. For example, if you create your database with 15 days remaining in the current month, the database will have `15 days * 2` (720 hours) included for that billing period.

You may see how many development branch hours have been used at any time by visiting your [organization billing page](https://app.planetscale.com/~/settings/billing/). Data is updated hourly.

#### Fractional vCPU allocation

Some tiers of the Scaler Pro plan indicate a fractional vCPU allocation. These branches run on our multi-tenant platform and this indicates the minimum number of cycles dedicated to your workload. The vast majority of the time, there are spare compute cycles available on the underlying machine instances hosting your branch, and those are available to be used by your workload as needed for no additional charge.

If you find the performance of a given query to be substantially inconsistent over the course of a given day, you may want to upgrade to a higher tier for more consistent performance.

### Usage-based plans

We previously offered a usage-based paid plan, Scaler, which [is now deprecated](/blog/deprecating-the-scaler-plan). You can no longer create new Scaler database clusters. We recommend starting on Scaler Pro for paid plans. Please see our [Scaler Pro upgrade documentation](/docs/concepts/scaler-pro-upgrade-faq) for upgrading an existing Scaler database to Scaler Pro.

The following table is for reference only and covers what was included on our Scaler plan for those still in the migration process:

|                                                                              | **Scaler**             |
| ---------------------------------------------------------------------------- | ---------------------- |
| **Storage/month**                                                            | 10 GB included         |
| **Row reads/month**                                                          | 100 billion included   |
| **Row writes/month**                                                         | 50 million included    |
| **Available cluster sizes**                                                  | 1                      |
| **Availability zones**                                                       | 2                      |
| **Production branches**                                                      | 2 per database         |
| **Development branches**                                                     | 5 per database         |
| **Concurrent connections**                                                   | 10,000                 |
| **Query Insights retention**                                                 | 7 days                 |
| **Horizontal sharding**                                                      | Not included           |
| [**Deployment options**](/docs/concepts/deployment-options)                  | Multi-tenant           |
| **Read only regions**                                                        | Available as an add-on |
| **Web console**                                                              | Included               |
| **PlanetScale CLI**                                                          | Included               |
| **SSO**                                                                      | Available as an add-on |
| **Audit log retention**                                                      | 15 days                |
| **Automatic backups**                                                        | Every 12 hours         |
| **Support**                                                                  | Standard               |
| [**Data Branching®**](/docs/concepts/data-branching)                        | Not included           |
| **Monthly cost**                                                             | $29 per database       |
| [**PlanetScale Boost**](/docs/concepts/query-caching-with-planetscale-boost) | Available as an add-on |

- Extra storage over the included amount is billed at $2.50 per additional 1 GB
- Extra rows read over the included amount are billed at $1 per additional 1 billion
- Extra rows written over the included amount are billed at $1.50 per additional 1 million.

### Selecting a cluster size

Selecting the correct cluster size for your database can have a dramatic impact on how it performs, and how much it costs.

If you are migrating from an existing cloud provider with resource-based pricing, be sure to compare your currently selected instance with our available **Scaler Pro** cluster sizes. Databases in PlanetScale often come with additional beneficial infrastructure that is not easily configured or available in other hosted database solutions. For more information on what is provisioned with each database, read our [Architecture](/docs/concepts/architecture) doc.

If you are unsure which plan or cluster size is right for your application, [contact us](/contact) to get further assistance.

Our self-serve plans are flexible enough to handle the majority of customers. However, there are several use cases where you may need a more custom plan. This is where our Enterprise offerings shine.

## PlanetScale Enterprise plan

PlanetScale's Enterprise Plan is great for users that want to scale farther, shard horizontally, and run PlanetScale in a dedicated AWS/GCP account. We offer many different deployment options, all of which come with the same set of standard features. The table below covers those shared features, as well as the different options that vary depending on your chosen deployment.

|                             | **Multi-Tenant** | **Single-Tenant** | **[Managed](/docs/enterprise/managed/overview)** |
| --------------------------- | ---------------- | ----------------- | ------------------------------------------------ |
| Resource-based pricing      | ✔               | ✔                | ✔                                               |
| Horizontal sharding         | ✔               | ✔                | ✔                                               |
| Unlimited connections       | ✔               | ✔                | ✔                                               |
| Customizable feature limits | ✔               | ✔                | ✔                                               |
| BAAs available              | ✔               | ✔                | ✔                                               |
| PCI compliant               | ❌               | ❌                | ✔ (on AWS)                                      |
| Dedicated AWS/GCP account   | ❌               | ✔                | ✔                                               |
| Your own AWS/GCP account    | ❌               | ❌                | ✔                                               |

## How do I know if I need an Enterprise plan?

If you’re not sure whether your use case requires an Enterprise plan, we’re more than happy to chat with you to figure it out together. You can [fill out this form](/contact), and we’ll be in touch.

In general, if you need any of the following, Enterprise may be the best solution for you:

- Resource-based pricing
- Unlimited connections
- Elegant sharding solution
- Enhanced support &mdash; our expert team becomes an extension of your own
- You need your database deployed in a single-tenant environment
- You need to keep your data in **your own** AWS or GCP account
- You need a signed BAA for HIPAA
- You need a PCI DSS certified service provider
- Any other customizations &mdash; Our Enterprise plans offer a lot of flexibility, so if you have a requirement that’s not listed here, it’s best to [reach out](/contact) and we can see how we can help

## Plan add-ons

### Single Sign-on (SSO)

You can add SSO for your organization on the Scaler Pro plan for an additional fee. Please [contact us](/contact) to enable SSO.

### User-scheduled backups

We run automatic daily backups for every branch for free. On the Scaler Pro plan, we run automated backups every 12 hours. Disk space for default backups is not counted against your plan's storage limit.

You can also [schedule additional backups yourself](/docs/concepts/back-up-and-restore#create-manual-backups) as needed. For these additional user-scheduled backups, storage is billed at **$0.023 per GB** per month. Backups include system tables as well as your data and start at around 140MB.
